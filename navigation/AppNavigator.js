import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import VideoModal from "../screens/VideoModal";
import sndPage from "../screens/sndPage";
import Persona1 from "../screens/Persona1";
import CharacterScreen from "../screens/CharacterScreen";

export default createAppContainer(
    createStackNavigator({
        // You could add another route here for authentication.
        // Read more at https://reactnavigation.org/docs/en/auth-flow.html
        Main: MainTabNavigator,
        Persona1: {
            screen: Persona1
        },
        VideoModal: {
            screen: VideoModal
        },
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
