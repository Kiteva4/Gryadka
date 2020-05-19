import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from '../../Styles'
export default class RequestRow extends React.Component{

    render() {
        return (
            <TouchableOpacity
                style={styles.requestRow}
                onPress = { ()=> console.log('Row item pressed')}
            >
                <Text> id: {this.props.id           } </Text>
                <Text> тип работ: {this.props.type  } </Text>
                <Text> вид работ: {this.props.spec  } </Text>
                <Text> адрес: {this.props.address   } </Text>
                <Text> фирма: {this.props.client    } </Text>
                <Text> дата: {this.props.date       } </Text> 
            </TouchableOpacity>
        );
      }
}