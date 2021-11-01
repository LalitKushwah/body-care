import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import StatusBar from '~/components/StatusBar'
import TodoList from '../components/TodoList';
import axios from 'axios';
import Loader from '~/components/Loader';

const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true)

  const [members, setMembers]  = useState([]);
  useEffect(() => {
    axios('https://boiling-taiga-78839.herokuapp.com/api/v1/users').then(response => {
      setIsLoading(false);
      setMembers(response.data)
    }).catch(err =>{
      setIsLoading(false);
      console.error(err);
    });
  }, [setIsLoading, isLoading])

  if (isLoading) {
    return <Loader></Loader>
  }

  return (
    <View style={styles.container}>
      <StatusBar bgColor="#5e3d9f"></StatusBar>
      <TodoList members={members}/>
      <FAB
        medium
        icon="plus"
        onPress={() => navigation.push('UserInfo')}
        style={styles.fab}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#5e3d9f'
  },
});

export default HomeScreen;
