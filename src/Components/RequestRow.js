import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import { stl_rqst_row} from '../../Styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class RequestRow extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={stl_rqst_row.requestRowContainer}
        onPress={() => console.log('Row item pressed')}>
        <View style={stl_rqst_row.requestRowLeftContent}>
          <Text style = {stl_rqst_row.requestRowIDText}> #{this.props.id} </Text>
          <View style = {{ flexDirection: 'row', alignItems: 'center' }} >
            <Icon name= "map-marker" size={18} color="#2F80ED" />
            <Text numberOfLines={1} maxFontSizeMultiplier = {1.2} style = {stl_rqst_row.requestRowAdressText}> {this.props.address} </Text>
          </View>
          <Text style = {stl_rqst_row.requestRowDateText}> {this.props.date} </Text>
        </View>
        <View style={stl_rqst_row.requestRowRightContent}>
          <Text style = {stl_rqst_row.requestRowCompanyText}> {this.props.client} </Text>
          <Text adjustsFontSizeToFit numberOfLines={1} style = {stl_rqst_row.requestRowSpecText}> {this.props.spec} </Text>
          <Text adjustsFontSizeToFit numberOfLines={1} style = {stl_rqst_row.requestRowTypeText}> {this.props.type} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
