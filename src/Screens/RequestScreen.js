import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {stl_rqst_screen} from '../../Styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class RequestScreen extends React.Component {
  render() {
    return (
      <View style={stl_rqst_screen.screen_contaienr}>
        <Text style={stl_rqst_screen.id_text}>
          Заявка №{this.props.route.params?.id ?? 'НЕИЗВЕСТНО'}
        </Text>
        <View style={stl_rqst_screen.params_block_container}>
          <View style={stl_rqst_screen.param_description_container}>
            <Text style={stl_rqst_screen.description_text}>Статус: </Text>
            <Text style={stl_rqst_screen.description_text}>Тип заявки: </Text>
            <Text style={stl_rqst_screen.description_text}>Вид работ: </Text>
            <Text style={stl_rqst_screen.description_text}>Заказчик: </Text>
            <Text style={stl_rqst_screen.description_text}>Адрес: </Text>
          </View>
          <View style={stl_rqst_screen.param_value_container}>
            <Text style={stl_rqst_screen.status_text}>
              Ожидается исполнитель
            </Text>
            <Text style={stl_rqst_screen.type_text}>
              {this.props.route.params?.type ?? 'НЕИЗВЕСТНО'}
            </Text>
            <Text
              style={stl_rqst_screen.spec_text}
              adjustsFontSizeToFit
              numberOfLines={1}>
              {this.props.route.params?.spec ?? 'НЕИЗВЕСТНО'}
            </Text>
            <Text style={stl_rqst_screen.client_text}>
              {this.props.route.params?.client ?? 'НЕИЗВЕСТНО'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                alignItems: 'center',
              }}>
              <Icon name="map-marker" size={18} color="#2F80ED" />
              <Text
                numberOfLines={2}
                adjustsFontSizeToFit
                style={stl_rqst_screen.adress_text}>
                {this.props.route.params?.address ?? 'НЕИЗВЕСТНО'}
              </Text>
            </View>
          </View>
        </View>

        <View style={stl_rqst_screen.params_block_container}>
          <View style={stl_rqst_screen.param_description_container}>
            <Text style={stl_rqst_screen.description_text}>Контактное лицо:</Text>
            <Text style={stl_rqst_screen.description_text}>Телефон: </Text>
            <Text style={stl_rqst_screen.description_text}>E-mail: </Text>
            <Text style={stl_rqst_screen.description_text}>Оплата: </Text>
            <Text style={stl_rqst_screen.description_text}>Планируемая дата:</Text>
          </View>
          <View style={stl_rqst_screen.param_value_container}>
            <Text>Измайлов Алексей Юрьевич</Text>
            <Text style = {{ color: "#2F80ED", fontWeight: 'bold'}}>8 800 123-45-67 </Text>
            <Text style = {{ color: "#2F80ED"}}>Firma@rm.ru </Text>
            <Text>750 Р </Text>
            <Text style={stl_rqst_screen.date_text}>
              {this.props.route.params?.date ?? 'НЕИЗВЕСТНО'}
            </Text>
          </View>
        </View>
        <Button color= 'skyblue' title="Press" />
      </View>
    );
  }
}