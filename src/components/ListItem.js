import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {List} from 'react-native-paper';
import {Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const ListItem = ({name, address, _id}) => {
  const navigation = useNavigation();
  const randomColor = ['#540754', '#e51837', '#23427f', '#47578f', '#293c42'];
  const user = {name, address, _id};
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('Member Detail', {...user})}
        android_ripple={{borderless: false}}>
        <List.Item
          title={name}
          description={address}
          left={() => (
            <Avatar.Icon
              style={{
                margin: 10,
                backgroundColor: randomColor[Math.floor(Math.random() * 5)],
              }}
              size={50}
              icon="account"
            />
          )}
          right={() => <List.Icon icon="arrow-right-circle" />}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
  },
});

export default ListItem;
