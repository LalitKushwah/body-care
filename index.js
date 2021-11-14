/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import axios from 'axios';

// this config should get read from env
axios.defaults.baseURL = 'https://fast-chamber-45022.herokuapp.com/api/v1';

export default function Main() {
    return (
        <PaperProvider>
            <App />
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);