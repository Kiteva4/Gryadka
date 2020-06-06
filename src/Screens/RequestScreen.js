import * as React from 'react';
import {View, Text} from 'react-native';

export default class RequestScreen extends React.Component {
  render() {
    return (
      <View>
        <Text> #{this.props.route.params?.id ?? 'НЕИЗВЕСТНО'}</Text>
        <Text> {this.props.route.params?.type ?? 'НЕИЗВЕСТНО'}</Text>
        <Text> {this.props.route.params?.spec ?? 'НЕИЗВЕСТНО'}</Text>
        <Text> {this.props.route.params?.client ?? 'НЕИЗВЕСТНО'}</Text>
        <Text> {this.props.route.params?.address ?? 'НЕИЗВЕСТНО'}</Text>
        <Text> {this.props.route.params?.date ?? 'НЕИЗВЕСТНО'} </Text>
      </View>
    );
  }
}