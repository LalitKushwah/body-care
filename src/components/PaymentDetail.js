import React from 'react';
import { Text } from 'react-native';
import { List } from 'react-native-paper';

const PaymentDetail = () => {
    return (
        <List.Item
            title='Payment Remark'
            description='11th March, 2021'
            left={props => <List.Icon {...props} icon="contactless-payment" />}
            right={() => <Text style={{marginRight: 10,marginTop: 10, fontSize: 20}}>{500}</Text>}
            style={{borderRadius: 10, backgroundColor: 'white', margin: 10}}
        >
        </List.Item>
    );
}
export default PaymentDetail;
