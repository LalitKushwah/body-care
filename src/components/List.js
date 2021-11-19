import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import ListItem from './ListItem';


const List = ({ members, rest }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={members}
        renderItem={itemData => <ListItem {...itemData.item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
})

export default List;
