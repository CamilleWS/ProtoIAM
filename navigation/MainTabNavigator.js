import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Persona1 from '../screens/Persona1';
import CharacterScreen from "../screens/CharacterScreen";

const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {},
});

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Accueil',
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

const Perso1Stack = createStackNavigator(
    {
        Perso1: Persona1,
    },
    config
);

Perso1Stack.navigationOptions = {

    tabBarLabel: 'Marie Curie',
    tabBarIcon: ({focused, tintColor}) => (
        <TabBarIcon focused={focused} activeTintColor={tintColor} name={Platform.OS === 'ios' ? 'ios-woman' : 'md-woman'}/>
    ),
};

Perso1Stack.path = '';

const tabNavigator = createBottomTabNavigator({
        HomeStack,
        Perso1Stack,
        Perso2: { screen: props => <CharacterScreen {...props} {...{id: "ramesses"}} /> },
    },
    {
        tabBarOptions: {
            activeTintColor: '#7D5FFF',
        }
    });




tabNavigator.path = '';

export default tabNavigator;
