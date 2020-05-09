import * as React from 'react'
import {Text, View} from 'react-native'
import { styles } from '../../../Styles';

export default class ProfileScreen extends React.Component {
    render(){
        return(
            <View style={styles.main_screen_container}>
                <Text>ProfileScreen</Text>
            </View>
        );
    }
}