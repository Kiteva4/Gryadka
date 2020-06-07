import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack';

import {Button, AsyncStorage} from 'react-native';
import TabMainScreen from './src/Screens/TabMainScreen';
import SignInScreen from './src/Screens/SignInScreen';
import RequestScreen from './src/Screens/RequestScreen';

import requests from './src/Data/RequestsList.json';

const Stack = createStackNavigator();
const default_array = requests.data;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // AsyncStorage.getItem("refresh_token")
    //   .then((refresh_token) => {  })

    this.state = {
      bitrix_state: null,
      data: default_array,
    };
  }

  setBitrixStatusHandler = (json) => {
    this.setState({
      bitrix_state: json,
    });

    fetch(json.client_endpoint + 'crm.deal.list.json?auth=' + json.access_token)
      .then((response) => response.json())
      .then((json_data) => {
        console.log(json_data);
        this.setState({
          data: json_data.result,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    // DEBUG
    return this.state.bitrix_state !== null ? (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn">
            {(props) => (
              <SignInScreen
                {...props}
                bitrixStatusHandler={(json) =>
                  this.setBitrixStatusHandler(json)
                }
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    ) : (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              headerRight: () => (
                <Button
                  onPress={() => this.setBitrixStatusHandler(null)}
                  title="Exit"
                  color="skyblue"
                />
              ),
            }}>
            {(props) => <TabMainScreen {...props} data={this.state.data} />}
          </Stack.Screen>
          <Stack.Screen name="RequestScreen" component={RequestScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

/*
watchman watch-del-all && rm -rf tmp/haste-map-react-native-packager && rm -rf node_modules && yarn && npm start --reset-cache
*/
