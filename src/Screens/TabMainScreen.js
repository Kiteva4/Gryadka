import * as React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SearchListScreen from './TabScreens/SearchListScreen'
import OfferListScreen from './TabScreens/OfferListScreen'
import InProgressListScreen from './TabScreens/InProgressListScreen'
import SettingsScreen from './TabScreens/SettingsScreen'
import ProfileScreen from './TabScreens/ProfileScreen'

const Tab = createBottomTabNavigator();

export default class TabMainScreen extends React.Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName="Поиск"
                tabBarOptions={{
                    activeTintColor: 'skyblue',
                    inactiveTintColor: 'gray',

                }}
            >
                <Tab.Screen
                    name="Поиск"
                    component={SearchListScreen}
                    options={{
                        tabBarLabel: 'Поиск',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="magnify"
                                color={color}
                                size={26}
                            />),
                    }}
                />
                <Tab.Screen
                    name="Предложения"
                    component={OfferListScreen}
                    options={{
                        tabBarLabel: 'Предложения',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="email"
                                color={color}
                                size={26}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="В работе"
                    component={InProgressListScreen}
                    options={{
                        tabBarLabel: 'В работе',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="briefcase"
                                color={color}
                                size={26}
                            />),
                    }}
                />
                <Tab.Screen
                    name="Карта"
                    component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Карта',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="map"
                                color={color}
                                size={26}
                            />),
                    }}
                />
                <Tab.Screen
                    name="Профиль"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Профиль',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="account"
                                color={color}
                                size={26}
                            />),
                    }}
                />
            </Tab.Navigator>
        );
    }
}
