import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import moment from 'moment';
import PaymentDetail from '~/components/PaymentDetail';

const MemberDetail = () => {
    const paymentHistory = [
        {
            title: 'Payment History',
            data: [
                { date: moment().format('LL'), amount: 500 },
                { date: moment().format('LL'), amount: 1000 },
                { date: moment().format('LL'), amount: 500 },
                { date: moment().format('LL'), amount: 1000 },
                { date: moment().format('LL'), amount: 500 },
                { date: moment().format('LL'), amount: 1000 },
                { date: moment().format('LL'), amount: 500 },
                { date: moment().format('LL'), amount: 1000 },
                { date: moment().format('LL'), amount: 500 },
                { date: moment().format('LL'), amount: 1000 },
                { date: moment().format('LL'), amount: 500 },
                { date: moment().format('LL'), amount: 1000 },
                { date: moment().format('LL'), amount: 500 },
                { date: moment().format('LL'), amount: 1000 }
            ]
        }
    ]
    return (
        <View>
            <View style={{ alignItems: 'center', backgroundColor: 'white', borderRadius: 30, margin: 15 }}>
                <View>
                    <Avatar.Icon style={{margin: 10}} size={100} icon="account" />
                </View>
                <View>
                    <Text style={{ fontSize: 25 }}>Lalit Kushwah</Text>
                    <View style={{padding: 10, alignItems: 'center'}}>
                        <Text>9770341411</Text>
                        <Text>Indore</Text>
                        <Text>Quaterly</Text>
                    </View>
                </View>
            </View>
            <SectionList
                style={{ margin: 10 }}
                sections={paymentHistory}
                // keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <PaymentDetail/>}
                renderSectionHeader={({ section: { title } }) => (
                    <Text>{title}</Text>
                )}
            />
        </View>
    )
}
export default MemberDetail;