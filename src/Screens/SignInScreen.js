import * as React from 'react';
import {TextInput, View, Button, Text, StatusBar, Linking} from 'react-native';
import {WebView} from 'react-native-webview';
import {styles} from '../../Styles';

import store from '../Store'
import {connect} from 'react-redux'
import {request_login, navigation_state_change, login_failure} from '../Actions/login'

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    
    store.dispatch(request_login())
  }

  NavigationStateChange = event => {
    store.dispatch(navigation_state_change(event.url))
  }

  onError = error => {
    store.dispatch(login_failure(error))
  }

  render() {
    return (
      <WebView
        userAgent={
          'Mozilla/5.0 (Linux; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3714.0 Mobile Safari/537.36'
        }
        ref = {ref => {
          this.webview = ref;
        }}
        source = {this.props.webview_source}
        incognito = {true}
        onNavigationStateChange = {this.NavigationStateChange}
        onError = {this.onError}
        domStorageEnabled = {true}
        javaScriptEnabled = {true}
      />
    );
  }
}

const GetStateLogin = state => ({
  login: state.login,
})

export default connect(GetStateLogin)(SignInScreen)