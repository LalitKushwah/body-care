/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import Navigator from './src/navigation/navigator';
 import {TodoContextProvider} from './src/context/TodoContext';

 const App = () => {
   return (
     <TodoContextProvider>
       <Navigator></Navigator>
     </TodoContextProvider>
   );
 };
 export default App;
