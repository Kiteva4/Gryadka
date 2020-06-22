/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import React from 'react'
import {Provider} from 'react-redux'
import Store from './src/Store'

const AppComponent = () => (
    <Provider store = { Store }>
      <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppComponent);
