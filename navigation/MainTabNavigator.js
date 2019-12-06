import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Persona1 from '../screens/Persona1';
import Persona2 from '../screens/Persona2';
import CharacterScreen from "../screens/CharacterScreen";
import Talk from '../screens/Talk';

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

const Perso2Stack = createStackNavigator(
    {
        Perso2: CharacterScreen,
    },
    config,
);

Perso2Stack.navigationOptions = {
    tabBarLabel: 'Ramses II',
    tabBarIcon: ({focused, tintColor}) => (
        <TabBarIcon focused={focused} activeTintColor={tintColor} name={Platform.OS === 'ios' ? 'ios-man' : 'md-man'}/>
    ),
};

Perso2Stack.screenProps = { id: "ramesses" };

Perso2Stack.path = '';

const TalkStack = createStackNavigator(
    {
        Talking: Talk,
    },
    config
);

TalkStack.navigationOptions = {
    tabBarLabel: 'Talk',
    tabBarIcon: ({focused, tintColor}) => (
        <TabBarIcon focused={focused} activeTintColor={tintColor} name={Platform.OS === 'ios' ? 'ios-man' : 'md-man'}/>
    ),
};

TalkStack.path = '';

const tabNavigator = createBottomTabNavigator({
        HomeStack,
        Perso1Stack,
        Perso2: { screen: props => <CharacterScreen {...props} {...{id: "ramesses"}} /> },
        Perso2Stack,
        TalkStack,
    },
    {
        tabBarOptions: {
            activeTintColor: '#7D5FFF',
        }
    });

tabNavigator.path = '';

export default tabNavigator;
