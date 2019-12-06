import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Persona1 from '../screens/Persona1';
import Persona2 from '../screens/Persona2';

const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {headerMode : "hiden" },
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

const Perso2Stack = createStackNavigator(
    {
        Perso2: Persona2,
    },
    config
);

Perso2Stack.navigationOptions = {
    tabBarLabel: 'Ramses II',
    tabBarIcon: ({focused, tintColor}) => (
        <TabBarIcon focused={focused} activeTintColor={tintColor} name={Platform.OS === 'ios' ? 'ios-man' : 'md-man'}/>
    ),
};

Perso2Stack.path = '';

const tabNavigator = createBottomTabNavigator({
        HomeStack,
        Perso1Stack,
        Perso2Stack,
    },
    {
        tabBarOptions: {
            activeTintColor: '#7D5FFF',
        }
    });

tabNavigator.path = '';

export default tabNavigator;
