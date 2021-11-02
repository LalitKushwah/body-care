import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

const List = ({ members }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={members}
        renderItem={itemData => <ListItem name={itemData.item.name} id={itemData.item._id} address={itemData.item.address}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})

export default List;
