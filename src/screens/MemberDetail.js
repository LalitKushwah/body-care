import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import moment from 'moment';

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
            <View style={{alignItems: 'center'}}>
                <View>
                    <Avatar.Icon style={{ margin: 10 }} size={50} icon="account" />
                </View>
                <View>
                    <Text>Lalit Kushwah</Text>
                    <Text>9770341411</Text>
                    <Text>Indore</Text>
                    <Text>Membership: Quaterly</Text>
                </View>
            </View>
            <SectionList
                style={{margin: 10}}
                sections={paymentHistory}
                // keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <List.Item title={item.date} right={() => <Text>{item.amount}</Text>} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text>{title}</Text>
                )}
            />
        </View>
    )
}
export default MemberDetail;