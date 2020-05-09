import * as React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../Styles'

export default class SplashScreen extends React.Component{
    render(){
        return(
            <View style = { splash_screen_container }>
                <Text>
                    Loading...
                </Text>
            </View>
        )
    }
}