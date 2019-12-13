import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import VideoModal from "../screens/VideoModal";
import sndPage from "../screens/SelectionScreen";
import CharacterScreen from "../screens/CharacterScreen";

export default createAppContainer(
    createStackNavigator({
        // You could add another route here for authentication.
        // Read more at https://reactnavigation.org/docs/en/auth-flow.html
        Main: MainTabNavigator,
        sndPage: {
            screen: sndPage
        },
        CharacterScreen: {
            screen: CharacterScreen
        }
    },
    {
        mode: 'modal',
        headerMode: 'none',
    })
);
