import * as React from 'react';
import {WebView} from 'react-native-webview';
import {styles} from '../../Styles';

import {connect} from 'react-redux'
import {request_login, navigation_state_change, login_failure} from '../Actions/login'

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    
    this.props.request_login()
  }

  NavigationStateChange = event => {
    //this.props.navigation_state_change(event.url)
  }

  onError = error => {
    this.props.login_failure(error)
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
        source = {this.props.login.webview_source}
        //source = {{"uri": "https://b24-otft79.bitrix24.ru/oauth/authorize/?client_id=local.5ecab48db8b1f9.69187074"}}
        incognito = {true}
        onNavigationStateChange = {this.NavigationStateChange}
        onError = {this.onError}
        domStorageEnabled = {true}
        javaScriptEnabled = {true}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login,
  }
}

const mapDispatchToProps = {
  request_login: request_login,
  navigation_state_change: navigation_state_change,
  login_failure: login_failure,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)