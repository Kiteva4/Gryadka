import * as React from 'react'
import { TextInput, Text, Button, View } from 'react-native'

export default class RegistrationScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <View>
                <TextInput
                placeholder='Введите почту'
                />
                <TextInput
                placeholder='Введите пароль'
                />
                <TextInput
                placeholder='Повторите пароль'
                />
                <Button
                title='Зарегистрироваться'
                onPress={()=> console.log("Зарегался")}
                />
            </View>
        )
    }
}