import * as React from 'react';
import {TextInput, View, Button, Text, StatusBar, Linking} from 'react-native';
import {WebView} from 'react-native-webview';
import {styles} from '../../Styles';

import server_data from '../Data/ServerData.json';

const url =
  'https://' +
  server_data.domain +
  '/oauth/authorize/?client_id=' +
  server_data.client_id;
const url2 =
  'https://' +
  server_data.domain +
  '/oauth/token/?grant_type=authorization_code&client_id=' +
  server_data.client_id +
  '&client_secret=' +
  server_data.client_secret +
  '&code=';
const url3 =
  'https://' +
  server_data.domain +
  '/oauth/authorize/?state=&client_id=l' +
  server_data.client_id;

export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: url,
    };
  }

  handleLogIn = json => {
    this.props.bitrixStatusHandler(json);
  };

  NavigationStateChange = event => {
    const regex_url = /test.gryadka.info/g;
    const oauth_with_other_url = /https:\/\/auth2.bitrix24.net\/bitrix\/tools\/oauth\/.+code=/g;

    console.log(event.url);

    if (regex_url.exec(event.url)) {
      this.webview.stopLoading();

      const regex = /[?&]([^=#]+)=([^&#]*)/g,
        params = {};
      let match;
      while ((match = regex.exec(event.url))) {
        params[match[1]] = match[2];
      }

      const response = fetch(url2 + params['code'])
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.handleLogIn(json);
        })
        .catch(error => {
          console.error(error);
        });
    } else if (oauth_with_other_url.exec(event.url)) {
      console.log('Здесь все работает');

      setTimeout(() => {
        this.setState({
          url: url3,
        });
      }, 1000);
    }
  };

  render() {
    return (
      <WebView
        userAgent={
          'Mozilla/5.0 (Linux; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3714.0 Mobile Safari/537.36'
        }
        ref={ref => {
          this.webview = ref;
        }}
        source={{uri: this.state.url}}
        incognito={true}
        onNavigationStateChange={this.NavigationStateChange}
      />
    );
  }
}
