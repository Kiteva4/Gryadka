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
      bitrix_state: null
    };
  }

  setBitrixStatusHandler = (json) => {
    this.setState({
      bitrix_state: json,
    });
  };

  componentDidMount() {
    SplashScreen.hide()
  }

  getAssesTocken() {
    return this.state.bitrix_state.access_token;
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        {
          this.state.bitrix_state == null ? ( 
          <Stack.Screen 
            name="SignIn" 
          >
              {props => <SignInScreen {...props} bitrixStatusHandler = { (json) => this.setBitrixStatusHandler(json) } />}
          </Stack.Screen>
          ) : ( 
          <Stack.Screen 
            name="Home"
            options={{
              headerRight: () => (
                <Button
                  onPress={() => 
                    this.setBitrixStatusHandler(null)
                    // fetch(this.state.bitrix_state.client_endpoint + "crm.deal.list.json?auth=" + this.state.bitrix_state.access_token)
                    //   .then((response) => response.json())
                    //   .then((json) => {
                    //       console.log(json);
                    //   })
                    //   .catch((error) => {
                    //       console.error(error);
                    //   })
                  }
                  title="Exit"
                  color="skyblue"
                />
              ),
            }}
          >
              {props => <TabMainScreen {...props} access_token = { () => this.getAssesTocken() } rest_url = { this.state.bitrix_state.client_endpoint }  />}
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