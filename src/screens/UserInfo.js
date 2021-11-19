import React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';
import Loader from '~/components/Loader';
import DropDownPicker from 'react-native-dropdown-picker';


const UserInfo = ({ fetchUsers }) => {
  const [name, setName] = useState(null);
  const [plan, setPlan] = useState(null);
  const [address, setAddress] = useState(null);
  const [contact, setContact] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Monthly', value: 'monthly' },
    { label: 'Quaterly', value: 'quaterly' },
    { label: 'Half Yearly', value: 'half' },
    { label: 'yearly', value: 'yearly' },
  ]);


  const onCreateUser = async () => {
    setIsLoading(true);
    const response = await axios.post('/user', {
      name,
      plan,
      address,
      contact,
      profilePhoto: 'NA'
    });
    setIsLoading(false);
    fetchUsers();
  }

  if (isLoading) {
    return <Loader></Loader>
  }

  return (
    <View>
      <View style={styles.paymentHeader}>
        <Text style={styles.paymentTitle}>Create User</Text>
      </View>
      <View style={{ margin: 10 }}>
        <TextInput label="Name" style={styles.input} placeholder="Enter name" onChangeText={text => setName(text)} />
        <TextInput label="Address" style={styles.input} placeholder="Enter address" onChangeText={text => setAddress(text)} />
        <TextInput label="Contact" style={styles.input} placeholder="Enter mobile number" onChangeText={text => setContact(text)} keyboardType="number-pad" />
        <View style={{ elevation: 10, marginVertical: 10 }}>
          <DropDownPicker
            placeholder='Please select plan'
            open={open}
            value={plan}
            items={items}
            setOpen={setOpen}
            setValue={setPlan}
            setItems={setItems}
          />
        </View>
        <Button mode="contained" disabled={(!name || !address || !plan)} onPress={onCreateUser}>Add Member</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6'
  },
  input: {
    backgroundColor: 'white',
  },
  avatar: {
    margin: 10
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#5e3d9f'
  },
  paymentHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  paymentTitle: {
    fontSize: 20
  },
  textCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default UserInfo;