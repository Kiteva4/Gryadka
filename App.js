import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import TabMainScreen from './src/Screens/TabMainScreen'
import SignInScreen from './src/Screens/SignInScreen'

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignInScreen"
            component={SignInScreen}
          />
          <Stack.Screen
            name="TabMainScreen"
            component={TabMainScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
