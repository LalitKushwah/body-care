import React from 'react';
import { View } from 'react-native';
import { List, Badge } from 'react-native-paper';
import moment from 'moment';

const PaymentDetail = ({remark, amount, date}) => {
    return (
        <List.Item
            title={remark}
            description={moment(date).format('DD-MMM-YYYY:HH:MM')}
            left={props => <List.Icon {...props} icon="contactless-payment" />}
            right={() => <View style={{ margin: 10 }}><Badge size={25} style={{ backgroundColor: 'grey', color: 'white', width: 60 }}>{amount}</Badge></View>}
            style={{ borderRadius: 10, backgroundColor: 'white', margin: 10 }}
        >
        </List.Item>
    );
}
export default PaymentDetail;
