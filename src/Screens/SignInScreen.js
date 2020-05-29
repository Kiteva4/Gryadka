import * as React from 'react';
import { TextInput, View, Button, Text, StatusBar, Linking } from 'react-native'
import { WebView } from 'react-native-webview';
import { styles } from '../../Styles';
import { authorize } from 'react-native-app-auth';

const config = {
      //issuer: 'https://demo.identityserver.io',
      clientId: 'local.5ecab48db8b1f9.69187074',
      //clientSecret: 'qQRPmRpBqJElmW2rJo3Od3uaZEWEzDo1dGakPDi7W2OMxAVRHz',
      redirectUrl: 'b24-otft79.bitrix24.ru/crm/deal',
      serviceConfiguration: {
        authorizationEndpoint: 'https://b24-otft79.bitrix24.ru/oauth/authorize',
        tokenEndpoint: 'https://b24-otft79.bitrix24.ru/oauth/token',
        revocationEndpoint: 'https://b24-otft79.bitrix24.ru/oauth/revoke'
      },
      //additionalParameters: {},
      //scopes: [],
}

const url = 'https://b24-otft79.bitrix24.ru/oauth/authorize/?client_id=local.5ecab48db8b1f9.69187074'
const url2 = 'https://b24-otft79.bitrix24.ru/oauth/token/?grant_type=authorization_code&client_id=local.5ecab48db8b1f9.69187074&client_secret=qQRPmRpBqJElmW2rJo3Od3uaZEWEzDo1dGakPDi7W2OMxAVRHz&code='
let current_url = url;

export default class SignInScreen extends React.Component {

    handleToggleLogIn = () => this.props.toggleLoginStatus() 

    NavigationStateChange = (event) => {
        if (event.url !== current_url) {
            current_url = event.url
            console.log("!!!!!!!!!!! " + current_url + " != " + event.url)
            const regex = /[?&]([^=#]+)=([^&#]*)/g,
            params = {};
            let match;
            while (match = regex.exec(event.url)) {
                params[match[1]] = match[2];
            }
            //url2 =  
            //this.webview.stopLoading();
            //this.webview.renderLoading()
            console.log("event.url = " + event.url)
            console.log("url = " + url)
            console.log("url send = " + url2 + params["code"])
            // this.webview.setState({
            //     onNavigationStateChange: this.NavigationStateChange2,
            //     url: url2 + params["code"],
            // })
        }
    }

    //NavigationStateChange2 = (event) => { console.log("result url = " + event.url); }

    render() {
        return (
            //<View style={styles.main_screen_container}>
                <WebView 
                ref={(ref) => { this.webview = ref; }}
                source={{ uri: url }}
                onNavigationStateChange={this.NavigationStateChange}
                /> 
            //</View>
        );
    }

    // render() {
    //     return (
    //         <View style={styles.main_screen_container}>
    //             <StatusBar barStyle='dark-content'/>
    //             <Text>Вход</Text>
    //             <TextInput
    //                 placeholder='Логин'
    //                 width= "95%"
    //                 textAlign='center'
    //             />
    //             <TextInput
    //                 placeholder='Пароль'
    //                 secureTextEntry={true}
    //                 autoCompleteType='password'
    //                 autoCorrect={false}
    //                 width= "95%"
    //                 textAlign='center'
    //             />
    //             <Button
    //                 title="ВОЙТИ"
    //                 // onPress={() => this.props.navigation.navigate('TabMainScreen')}
    //                 onPress = { this.handleToggleLogIn }
    //             />
    //             <Button
    //                 title="ВОССТАНОВИТЬ ПАРОЛЬ"
    //                 // onPress={() => this.props.navigation.navigate('TabMainScreen')}
    //                 onPress = { this.handleToggleLogIn }
    //             />
    //             <Button
    //                 title="Войти через битрикс"
    //                 // onPress={() => this.props.navigation.navigate('TabMainScreen')}
    //                 onPress = { async () => {
    //                     //console.log(config);
    //                     //const newAuthState = await authorize(config);
    //                     //console.log(newAuthState);
    //                     const url = "https://b24-otft79.bitrix24.ru/oauth/authorize/?client_id=local.5ecab48db8b1f9.69187074"
    //                     //Linking.openURL(url).catch(err => console.error('An error occurred', err));
    //                 } }
    //             />
    //         </View>
    //     );
    // }
}