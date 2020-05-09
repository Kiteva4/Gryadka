import * as React from 'react'
import {Text, View} from 'react-native'
import { styles } from '../../../Styles';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.main_screen_container}>
                <Text>Home</Text>
            </View>
        );
    }
}