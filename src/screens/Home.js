import React, {useState, useEffect, useRef, useCallback} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {FAB} from 'react-native-paper';
import List from '../components/List';
import axios from 'axios';
import Loader from '~/components/Loader';
import Searchbar from '~/components/Searchbar';
import BottomSheet from '~/components/BottomSheet';
import UserInfo from './UserInfo';

const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [allMember, setAllMember] = useState([]);
  const bottomsheetRef = useRef();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = useCallback(() => {
    axios('/users')
      .then(response => {
        setIsLoading(false);
        setMembers(response.data);
        setAllMember(response.data);
        bottomsheetRef.current.close();
      })
      .catch(err => {
        setIsLoading(false);
        bottomsheetRef.current.close();
        console.error(err);
      });
  }, [isLoading, members]);

  const onSearchHandler = text => {
    setSearchText(text);
    const filteredMembers = allMember.filter(member =>
      member.name.toLowerCase().includes(text.toLowerCase()),
    );
    setMembers(filteredMembers);
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <View style={styles.container}>
      <Searchbar
        searchText={searchText}
        onSearchHandler={onSearchHandler}></Searchbar>
      <List members={members} />
      <FAB
        medium
        icon="plus"
        onPress={() => bottomsheetRef.current.open()}
        style={styles.fab}
      />
      <BottomSheet
        ref={bottomsheetRef}
        height={Dimensions.get('window').height / 2}>
        <UserInfo fetchUsers={fetchUsers} />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#5e3d9f',
  },
});

export default HomeScreen;
