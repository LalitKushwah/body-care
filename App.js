/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigator from './src/navigation/navigator';
import StatusBar from '~/components/StatusBar'

const App = () => {
  return (
    <>
      <StatusBar bgColor="#5e3d9f"></StatusBar>
      <Navigator></Navigator>
    </>
  );
};
export default App;
