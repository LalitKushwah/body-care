import React from 'react';
import { View } from 'react-native';
import { List, Badge } from 'react-native-paper';

const PaymentDetail = () => {
    return (
        <List.Item
            title='Payment Remark'
            description='11th March, 2021'
            left={props => <List.Icon {...props} icon="contactless-payment" />}
            right={() => <View style={{ margin: 10 }}><Badge size={25} style={{ backgroundColor: 'grey', color: 'white', width: 60 }}>500</Badge></View>}
            style={{ borderRadius: 10, backgroundColor: 'white', margin: 10 }}
        >
        </List.Item>
    );
}
export default PaymentDetail;
