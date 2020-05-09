import * as React from 'react';
import { TextInput, View, Button, Text } from 'react-native'
import { styles } from '../../Styles';

export default class SignInScreen extends React.Component {
    render() {
        return (
            <View style={styles.main_screen_container}>
                <Text>Вход</Text>
                <TextInput
                    placeholder='Логин'
                    width= "95%"
                    textAlign='center'
                />
                <TextInput
                    placeholder='Пароль'
                    secureTextEntry={true}
                    autoCompleteType='password'
                    autoCorrect={false}
                    width= "95%"
                    textAlign='center'
                />
                <Button
                    title="ВОЙТИ"
                    onPress={() => this.props.navigation.navigate('TabMainScreen')}
                />
                <Button
                    title="ВОССТАНОВИТЬ ПАРОЛЬ"
                    onPress={() => this.props.navigation.navigate('TabMainScreen')}
                />
            </View>
        );
    }
}