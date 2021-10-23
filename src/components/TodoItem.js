import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { TodoContext } from '../context/TodoContext';
import { useContext } from 'react';

const TodoItem = ({ name, id }) => {
    // const { removeTodo } = useContext(TodoContext);
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10
    },
    titleContainer: {
        flex: 0.8,
    },
    title: {
        fontSize: 18
    },
    actionContainer: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    edit: {
        // flex: 0.1,
    },
    delete: {
        // flex: 0.1
    }
});

export default TodoItem;
