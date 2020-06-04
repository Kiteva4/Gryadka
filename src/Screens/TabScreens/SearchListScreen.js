import * as React from 'react'
import {View, Text, FlatList, StatusBar, ScrollView} from 'react-native'
import { styles } from '../../../Styles';

import SearchBar from 'react-native-search-bar';

import RequestRow from '../../Components/RequestRow'

import requests from '../../Data/RequestsList.json'

export default class SearchListScreen extends React.Component {

    //item: { id:"0", type: "тип работы", spec: "вид работы", address: "ул. Работы", client: "OOO Firma", date: "01.01.2021" } 
    renderItem = obj => <RequestRow 
                            id={obj.item.ID} 
                            type={obj.item.TYPE_ID} 
                            spec={obj.item.TITLE}
                            address={obj.item.COMPANY_ID }
                            client={obj.item.OPPORTUNITY }
                            date={obj.item.DATE_CREATE}
                        />

    render(){
        return(
        <View style = {styles.search_screen_container}>
            <StatusBar barStyle='dark-content'/>
            <SearchBar
                ref="searchBar"
                placeholder="Search"
                barTintColor="white"
                showsCancelButton={false}
                //hideBackground={true}
            />
            <FlatList
                renderItem={this.renderItem}
                data={this.props.data}
                keyExtractor={item => item.ID.toString()}
            >
            </FlatList>
        </View>
        );
    }
}