import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {stl_rqst_row} from '../../Styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RequestRow(props) {
  return (
    <TouchableOpacity
      style={stl_rqst_row.requestRowContainer}
      onPress={() =>
        props.navigation.navigate('RequestScreen', {
          id: props.id,
          type: props.type,
          spec: props.spec,
          address: props.address,
          client: props.client,
          date: props.date,
        })
      }>
      <View style={stl_rqst_row.requestRowLeftContent}>
        <Text style={stl_rqst_row.requestRowIDText}> #{props.id} </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
          <Icon name="map-marker" size={18} color="#2F80ED" />
          <Text
            numberOfLines={1}
            maxFontSizeMultiplier={1.2}
            style={stl_rqst_row.requestRowAdressText}>
            {props.address}
          </Text>
        </View>
        <Text style={stl_rqst_row.requestRowDateText}> {props.date} </Text>
      </View>
      <View style={stl_rqst_row.requestRowRightContent}>
        <Text style={stl_rqst_row.requestRowCompanyText}>{props.client}</Text>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={stl_rqst_row.requestRowSpecText}>
          {props.spec}
        </Text>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={stl_rqst_row.requestRowTypeText}>
          {props.type}
        </Text>
      </View>
    </TouchableOpacity>
  );
}