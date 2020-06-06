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
  },
  requestRowIDText: {
    fontSize: 18,
    fontWeight: 'bold',
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
  },
  requestRowCompanyText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    textAlignVertical: 'center',
    color: 'grey',
  },
  requestRowSpecText: {
    color: 'grey',
    textAlign: 'right',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
  requestRowTypeText: {
    fontSize: 14,
    textAlign: 'right',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    color: '#56CCF2',
  },
});
