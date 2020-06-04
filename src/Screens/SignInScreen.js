import * as React from 'react';
import { TextInput, View, Button, Text, StatusBar, Linking } from 'react-native'
import { WebView } from 'react-native-webview';
import { styles } from '../../Styles';

// Сервер Аветика
//const url = 'https://bxtest.bitrix24.ru/oauth/authorize/?client_id=local.5ecab2cc2333d2.46390240'
//const url2 = 'https://bxtest.bitrix24.ru/oauth/token/?grant_type=authorization_code&client_id=local.5ecab2cc2333d2.46390240&client_secret=msh3utFIA4PQIKmMstMZTBBHKSjWYfwcl1rg63hEG1hEBXASoY&code='

// Сервер Паши
const url = 'https://b24-otft79.bitrix24.ru/oauth/authorize/?client_id=local.5ecab48db8b1f9.69187074'
const url2 = 'https://b24-otft79.bitrix24.ru/oauth/token/?grant_type=authorization_code&client_id=local.5ecab48db8b1f9.69187074&client_secret=qQRPmRpBqJElmW2rJo3Od3uaZEWEzDo1dGakPDi7W2OMxAVRHz&code='

export default class SignInScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isPressed: false,
        };
    }

    handleLogIn = (json) => { this.props.bitrixStatusHandler(json); }

    NavigationStateChange = (event) => {
        const regex_url = /test.gryadka.info/g

        if (regex_url.exec(event.url)) {
            this.webview.stopLoading();

            const regex = /[?&]([^=#]+)=([^&#]*)/g,
            params = {};
            let match;
            while (match = regex.exec(event.url)) {
                params[match[1]] = match[2];
            }

            fetch(url2 + params["code"])
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    this.handleLogIn(json);
                })
                .catch((error) => {
                    console.error(error);
            });
        }
    }

    render() {
        return (
            this.state.isPressed ?
            <WebView 
            ref={(ref) => { this.webview = ref; }}
            source={{ uri: url }}
            onNavigationStateChange={this.NavigationStateChange}
            incognito={true}
            userAgent={"Mozilla / 5.0 (Linux; U; ru-ru; Xoom Build / HRI39) AppleWebKit / 534.13 (KHTML, как Gecko) Версия / 4.0 Safari / 534.13"}
            /> 
            :
            <View style={styles.main_screen_container}>
            <StatusBar barStyle='dark-content'/>
            <Button
                title="Войти через битрикс"
                //onPress={() => this.props.navigation.navigate('TabMainScreen')}
                onPress = { () => {
                    this.setState({ isPressed: true });
                    console.log("isPressed")
                }}
            />
            </View>
        );
    }
}