import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { Avatar } from 'react-native-paper';

const ListItem = ({ name, address }) => {
    return (
        <View style={styles.container}>
            <List.Item
                title={name}
                description={address}
                left={() => <Avatar.Icon style={{ margin: 10 }} size={50} icon="account" />}
                right={() => <List.Icon icon="arrow-right-circle" />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10
    }
});

export default ListItem;
