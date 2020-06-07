import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main_screen_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  search_screen_container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
});

export const stl_rqst_row = StyleSheet.create({
  requestRowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 5,
    elevation: 2,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  requestRowLeftContent: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    margin: 2,
  },
  requestRowRightContent: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    margin: 2,
    marginRight: 10,
  },
  requestRowIDText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
  },
  requestRowAdressText: {
    textAlign: 'left',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    color: '#2F80ED',
  },
  requestRowDateText: {
    fontSize: 14,
    color: 'grey',
    padding: 5,
  },
  requestRowCompanyText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    textAlignVertical: 'center',
    color: 'grey',
    padding: 5,
  },
  requestRowSpecText: {
    color: 'grey',
    textAlign: 'right',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    padding: 5,
  },
  requestRowTypeText: {
    fontSize: 14,
    textAlign: 'right',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    color: '#56CCF2',
    padding: 5,
  },
});

export const stl_rqst_screen = StyleSheet.create({
  screen_contaienr: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  params_block_container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingBottom: 25
  },
  param_description_container: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flex: 1,
    minHeight: 150,
    marginLeft: 45,
  },
  param_value_container: {
    flex: 2,
    minHeight: 150,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  description_text: {
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'gray',
    textAlign: 'left',
  },
  id_text: {
    fontSize: 24,
    textAlignVertical: 'center',
    padding: 25
  },
  status_text: {
    fontSize: 14,
    textAlignVertical: 'center',

  },
  type_text: {
    fontSize: 14,
    textAlignVertical: 'center',
  },
  spec_text: {
    fontSize: 14,
    textAlignVertical: 'center',
    // maxWidth: 275
  },
  client_text: {
    fontSize: 14,
    textAlignVertical: 'center',
  },
  adress_text: {
    fontSize: 14,
    textAlignVertical: 'center',
    fontWeight: 'bold',
    color: '#2F80ED'
  },
  date_text: {
    fontSize: 14,
    textAlignVertical: 'center',
  },
});
