import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import VideoModal from "../screens/VideoModal";

import SpeechToText from "../screens/SpeechToText";

export default createAppContainer(
    createStackNavigator({
        // You could add another route here for authentication.
        // Read more at https://reactnavigation.org/docs/en/auth-flow.html
        Main: MainTabNavigator,
        SpeechToText: {
            screen: SpeechToText
        },
        VideoModal: {
            screen: VideoModal
        }
    },
    {
        mode: 'modal',
        headerMode: 'none',
    })
);
