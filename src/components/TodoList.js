import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ members }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={members}
        renderItem={itemData => <TodoItem name={itemData.item.name} id={itemData.item._id} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})

export default TodoList;
