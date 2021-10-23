import React from 'react';
import { TextInput, RadioButton, Button } from 'react-native-paper';
import { View, Text } from 'react-native';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';
import Loader from '~/components/Loader';

const UserInfo = () => {
    const [name, setName] = useState('');
    const [plan, setPlan] = useState('monthly');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onCreateUser = async () => {
        setIsLoading(true);
        const response = await axios.post('http://localhost:3000/api/v1/user', {
            name,
            plan,
            address,
            contact,
            profilePhoto: 'NA'
        });
        setIsLoading(false);
    }

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <View>
            <TextInput label="Name" placeholder="Enter name" onChangeText={text => setName(text)} />
            <TextInput label="Address" placeholder="Enter address" onChangeText={text => setAddress(text)} />
            <TextInput label="Contact" placeholder="Enter mobile number" onChangeText={text => setContact(text)} keyboardType="number-pad" />
            <RadioButton.Group onValueChange={setPlan} value={plan}>
                <View>
                    <Text>Monthly</Text>
                    <RadioButton value="monthly" />
                </View>
                <View>
                    <Text>Quaterly</Text>
                    <RadioButton value="quaterly" />
                </View>
                <View>
                    <Text>Half Yearly</Text>
                    <RadioButton value="half-yearly" />
                </View>
                <View>
                    <Text>Yearly</Text>
                    <RadioButton value="yearly" />
                </View>
            </RadioButton.Group>
            <Button mode="contained" onPress={onCreateUser}>Add Member</Button>
        </View>
    );
}

export default UserInfo;