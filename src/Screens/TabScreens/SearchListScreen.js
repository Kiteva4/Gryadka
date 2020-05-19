import * as React from 'react'
import {View, Text, FlatList, StatusBar, ScrollView} from 'react-native'
import { styles } from '../../../Styles';

import requests from '../../Data/RequestsList.json'
import RequestRow from '../../Components/RequestRow'

const array = requests.data

export default class SearchListScreen extends React.Component {

    //item: { id:"0", type: "тип работы", spec: "вид работы", address: "ул. Работы", client: "OOO Firma", date: "01.01.2021" } 
    renderItem = obj => <RequestRow 
                            id={obj.item.id} 
                            type={obj.item.type} 
                            spec={obj.item.spec}
                            address={obj.item.address }
                            client={obj.item.client }
                            date={obj.item.date}
                        />

    render(){
        return(
        <View style = {styles.search_screen_container}>
            <FlatList
                renderItem={this.renderItem}
                data={array}
                keyExtractor={item => item.id.toString()}
            >
            </FlatList>
        </View>
        );
    }
}