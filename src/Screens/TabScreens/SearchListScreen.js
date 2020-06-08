import * as React from 'react';
import { View, FlatList, StatusBar, RefreshControl } from 'react-native';
import { styles } from '../../../Styles';

import SearchBar from 'react-native-search-bar';

import RequestRow from '../../Components/RequestRow';

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default class SearchListScreen extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isRefreshing: false
    }
  }

  refreshHandle = () => {
    this.setState({ isRefreshing: true });

    wait(2000)
      .then(() => this.setState({ isRefreshing: false }))
  }

  //item: { id:"0", type: "тип работы", spec: "вид работы", address: "ул. Работы", client: "OOO Firma", date: "01.01.2021" }
  renderItem = obj => (
    <RequestRow
      id={obj.item.ID}
      type={obj.item.TYPE_ID}
      spec={obj.item.TITLE}
      address={obj.item.COMPANY_ID}
      client={obj.item.OPPORTUNITY}
      date={obj.item.DATE_CREATE}
      navigation={this.props.navigation}
    />
  );

  render() {
    return (
      <View style={styles.search_screen_container}>
        <StatusBar barStyle="dark-content" />
        <SearchBar
          ref="searchBar"
          placeholder="Search"
          barTintColor="white"
          showsCancelButton={false}
        //hideBackground={true}
        />
        <FlatList
          refreshControl={<RefreshControl refreshing={this.state.isRefreshing} onRefresh={ () => { this.refreshHandle() } } />}
          renderItem={this.renderItem}
          data={this.props.data}
          keyExtractor={item => item.ID.toString()}
        />
      </View>
    );
  }
}
