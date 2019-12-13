import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import sndPage from '../screens/sndPage';
import CharacterScreen from "../screens/CharacterScreen";

const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {headerMode: 'hidden'},
});

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Accueil',
    tabBarVisible: false,
    tabBarIcon: ({focused, tintColor}) => (
        <TabBarIcon
            focused={focused}
            activeTintColor={tintColor}
            name={
                Platform.OS === 'ios'
                    ? 'ios-rocket'
                    : 'md-rocket'
            }
        />
    ),
};

HomeStack.path = '';

const secondPage = createStackNavigator(
    {
        snd: sndPage,
    },
    config
);

secondPage.navigationOptions = {

    tabBarLabel: '2nd Page',
    tabBarIcon: ({focused, tintColor}) => (
        <TabBarIcon focused={focused} activeTintColor={tintColor} name={Platform.OS === 'ios' ? 'ios-aperture' : 'md-aperture'}/>
    ),
};

secondPage.path = '';

const tabNavigator = createBottomTabNavigator({
        HomeStack,
        //secondPage,
        // Perso1Stack,
        // Perso3Stack,
    },
    {
        tabBarOptions: {
            activeTintColor: '#7D5FFF',
            visible: false,
        }
    });

tabNavigator.path = '';



export default tabNavigator;
