import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { List } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ListItem = ({ name, address }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('Member Detail')} android_ripple={{ borderless: false }}>
                <List.Item
                    title={name}
                    description={address}
                    left={() => <Avatar.Icon style={{ margin: 10 }} size={50} icon="account" />}
                    right={() => <List.Icon icon="arrow-right-circle" />}
                />
            </Pressable>
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
