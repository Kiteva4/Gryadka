import * as React from 'react'
import {Text, View, StatusBar} from 'react-native'
import { styles } from '../../../Styles';

export default class InProgressList extends React.Component{
    render(){
        return(
            <View style={styles.main_screen_container}>
                <StatusBar barStyle='dark-content'/>
            </View>
        );
    }
}