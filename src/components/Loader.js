import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loader = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" color="#5e3d9f"></ActivityIndicator>
    </View>
  );
};

export default Loader;
