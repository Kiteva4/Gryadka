import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator } from '@react-navigation/stack';

import { Button } from 'react-native'
import TabMainScreen from './src/Screens/TabMainScreen'
import SignInScreen from './src/Screens/SignInScreen'

const Stack = createStackNavigator();

export default class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      userToken: null,
    };
  }

  toggleToken = () => {
    console.log('toggleToken')
    this.setState(prevState => ({
      userToken:
        prevState.userToken === null
          ? 123
          : null,
    }));
  };

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        {
          this.state.userToken == null ? ( 
          <Stack.Screen 
            name="SignIn" 
          >
              {props => <SignInScreen {...props} toggleLoginStatus = { ()   => this.toggleToken() } />}
          </Stack.Screen>
          ) : ( 
          <Stack.Screen 
            name="Home"
            options={{
              headerRight: () => (
                <Button
                  onPress={() => this.toggleToken()}
                  title="Exit"
                  color="skyblue"
                />
              ),
            }}
          >
              {props => <TabMainScreen {...props} toggleLoginStatus = { () => this.toggleToken() }  />}
          </Stack.Screen>
          )
        }
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


/*
watchman watch-del-all && rm -rf tmp/haste-map-react-native-packager && rm -rf node_modules && yarn && npm start --reset-cache
*/