import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loader = () => {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    )
}

export default Loader;