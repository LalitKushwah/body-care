import React, { useEffect, useRef, useCallback } from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import { Avatar, TextInput, Button } from 'react-native-paper';
import moment from 'moment';
import PaymentDetail from '~/components/PaymentDetail';
import { FAB } from 'react-native-paper';
import BottomSheet from '../components/BottomSheet';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import Loader from '~/components/Loader';

const MemberDetail = ({ route }) => {
    const { _id, name, address } = route.params;
    const bottomsheetRef = useRef();
    const [amount, setAmount] = useState();
    const [remark, setRemark] = useState();
    const [paymentHistory, setPaymentHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetchPayment();
    }, [setPaymentHistory])

    const fetchPayment = () => {
        axios.get(`/payment?userId=${_id}`)
            .then(response => {
                setPaymentHistory(response.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
                setIsLoading(false);
            });
    }

    const addPayment = useCallback(async () => {
        setIsLoading(true);
        const response = await axios.post('/payment', {
            userId: _id,
            amount,
            remark
        });
        setIsLoading(false);
        setAmount(null);
        setRemark(null);
        fetchPayment();
    }, [_id, amount, remark])

    const renderFooter = !paymentHistory.length && (
        <View style={styles.textCenter}>
            <Text>No Data available</Text>
        </View>
    );

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <View>
                    <Avatar.Icon style={styles.avatar} size={100} icon="account" />
                </View>
                <View>
                    <Text style={{ fontSize: 25 }}>{name}</Text>
                    <View style={{ padding: 10, alignItems: 'center' }}>
                        <Text>9770341411</Text>
                        <Text>{address}</Text>
                        <Text>Quaterly</Text>
                    </View>
                </View>
            </View>
            <FlatList
                style={{ margin: 10 }}
                data={paymentHistory}
                // keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <PaymentDetail {...item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text>{title}</Text>
                )}
                ListFooterComponent={renderFooter}
            />
            <FAB
                medium
                icon="plus"
                onPress={() => bottomsheetRef.current.open()}
                style={styles.fab}
            />
            <BottomSheet ref={bottomsheetRef} height={300}>
                <View style={styles.paymentHeader}>
                    <Text style={styles.paymentTitle}>Add Payment</Text>
                </View>
                <View style={{ margin: 20 }}>
                    <TextInput
                        label="Enter payment amount"
                        value={amount}
                        style={{ backgroundColor: 'white' }}
                        onChangeText={amount => setAmount(amount)}
                    />
                    <TextInput
                        label="Enter remark"
                        value={remark}
                        style={{ backgroundColor: 'white' }}
                        onChangeText={remark => setRemark(remark)}
                    />
                    <Button mode="contained" onPress={addPayment}> Create </Button>
                </View>
            </BottomSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6'
    },
    profile: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        margin: 15
    },
    avatar: {
        margin: 10
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#5e3d9f'
    },
    paymentHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    paymentTitle: {
        fontSize: 20
    },
    textCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default MemberDetail;