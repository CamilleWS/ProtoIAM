import React, {Component} from 'react';
import {ExpoConfigView} from '@expo/samples';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    AppRegistry,
    Text,
    Dimensions,
    TouchableOpacity,
    Modal,
    Alert,
    TouchableHighlight,
    View
} from 'react-native';
import {Video} from 'expo-av'

import {MaterialIcons, Octicons} from '@expo/vector-icons';

const {width} = Dimensions.get('window');

export default class Persona2 extends Component {

    state = {
    }



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tabBarInfoContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('VideoModal', {
                                video: require('../assets/videos/zelda_ghibli.mp4')
                            });
                        }}>
                        <Text style={styles.tabBarInfoText}>Combien aviez-vous d’enfants ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabBarInfoContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('VideoModal', {
                                video: require('../assets/videos/pexels.mp4')
                            });
                        }}>
                        <Text style={styles.tabBarInfoText}>Quand êtes-vous née ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabBarInfoContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('VideoModal', {
                                video: require('../assets/videos/zelda_ghibli.mp4')
                            });
                        }}>
                        <Text style={styles.tabBarInfoText}>Qui était votre reine ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabBarInfoContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('VideoModal', {
                                video: require('../assets/videos/pexels.mp4')
                            });
                        }}>
                        <Text style={styles.tabBarInfoText}>Luttiez-vous pour la paix ou pour la guerre ?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

Persona2.navigationOptions = {
    title: 'Ramses II',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    controlBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },

    tabBarInfoContainer: {
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {width: 0, height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
        marginBottom: 10
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
});
