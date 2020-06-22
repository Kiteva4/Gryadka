import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import {Button} from 'react-native';
import TabMainScreen from './src/Screens/TabMainScreen';
import SignInScreen from './src/Screens/SignInScreen';
import RequestScreen from './src/Screens/RequestScreen';

import requests from './src/Data/RequestsList.json';
import server_data from './src/Data/ServerData.json';

const Stack = createStackNavigator();
const default_array = requests.data;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.init();

    this.state = {
      bitrix_state: null,
      data: default_array,
    };
  }

  init = async () => {
    try {
      const refresh_token = await AsyncStorage.getItem("refresh_token");

      if (refresh_token === null) return

      const response = await fetch("https://oauth.bitrix.info/oauth/token/?" +
        "grant_type=refresh_token&refresh_token=" + refresh_token + 
        "&client_id=" + server_data.client_id + "&client_secret=" +
        server_data.client_secret)

      const json_data = await response.json()
  
      this.setBitrixStatusHandler(json_data);
    }
    catch {

    }
  }

  setBitrixStatusHandler = (json) => {
    this.setState({
      bitrix_state: json,
    });

    if (json === null)
    {
      AsyncStorage.removeItem("refresh_token");
      return
    }
    
    AsyncStorage.setItem("refresh_token", json.refresh_token)

    fetch(json.client_endpoint + 'crm.deal.list.json?auth=' + json.access_token)
      .then((response) => response.json())
      .then((json_data) => {
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
    return this.state.bitrix_state == null ? (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name = "SignIn"
              component = {SignInScreen}
            />
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
