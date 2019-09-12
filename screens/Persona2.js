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
        mute: false,
        play: false,
        playbackObject: [],
        modalVisible: false,
    }

    _handleVideoRef = component => {
        this.setState({playbackObject: component})
    }


    stopVideo = () => {
        (this.state.playbackObject).stopAsync();
    }

    handleVolume = () => {
        this.setState({mute: !this.state.mute});
        if (this.state.mute) {
            (this.state.playbackObject).setVolumeAsync(1);
        } else {
            (this.state.playbackObject).setVolumeAsync(0);
        }
    }

    handlePlayAndPause = () => {
        this.setState({play: !this.state.play})
        if (this.state.play) {
            (this.state.playbackObject).pauseAsync();
        } else {
            (this.state.playbackObject).playAsync();
        }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
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
                        <Text style={styles.tabBarInfoText}>Tu avais combien d’enfants ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabBarInfoContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('VideoModal', {
                                video: require('../assets/videos/pexels.mp4')
                            });
                        }}>
                        <Text style={styles.tabBarInfoText}>Tu es née quand ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabBarInfoContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('VideoModal', {
                                video: require('../assets/videos/zelda_ghibli.mp4')
                            });
                        }}>
                        <Text style={styles.tabBarInfoText}>Qui était ta reine ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabBarInfoContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('VideoModal', {
                                video: require('../assets/videos/pexels.mp4')
                            });
                        }}>
                        <Text style={styles.tabBarInfoText}>Lutez-vous pour la paix ou pour la guerre ?</Text>
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
