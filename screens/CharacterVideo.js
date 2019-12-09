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
    SafeAreaView,
    View
} from 'react-native';
import {Video} from 'expo-av'

import {MaterialIcons, Octicons} from '@expo/vector-icons';

const {width} = Dimensions.get('window');

export default class CharacterVideo extends Component {

    state = {
        mute: false,
        play: true,
        loop: true,
        playbackObject: [],
        shouldGoIdle: false,
    }

    _onPlaybackStatusUpdate = async (playbackStatus) => {
        if (playbackStatus.didJustFinish) {
            if (this.state.shouldGoIdle) {
                await this.setState({shouldGoIdle: false});
                await this.state.playbackObject.unloadAsync();
                await this.state.playbackObject.loadAsync(require("../assets/videos/presentation/leonard_standing.mov"));
                this.state.playbackObject.playFromPositionAsync(0);
            }
        }
    };

    _handleVideoRef = component => {
        this.setState({playbackObject: component})
    }

    changeVideo = async () => {
        await this.state.playbackObject.unloadAsync();
        await this.state.playbackObject.loadAsync(video[this.state.indexVideoPlayed]);
        this.state.playbackObject.playFromPositionAsync(0);
        this.setState({shouldGoIdle: true});
    }

    stopVideo = () => {
        (this.state.playbackObject).stopAsync();
        this.setState({mute: false});
        this.setState({play: false});
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
    };

    render() {
        if (this.props.video != undefined) {
            this.state.loop = false;
            this.state.shouldGoIdle = true;
        }
        return (
            <View>
                <Video
                    source={this.props.video == undefined ? require("../assets/videos/presentation/leonard_standing.mov") : this.props.video}
                    ref={this._handleVideoRef}
                    isMuted={this.state.mute}
                    resizeMode="cover"
                    shouldPlay={this.state.play}
                    isLooping={this.state.loop}
                    style={{width: width, height: 300, backgroundColor: 'black'}}
                    onPlaybackStatusUpdate={(playbackStatus) => this._onPlaybackStatusUpdate(playbackStatus)}
                />
                <View style={styles.controlBar}>
                    <MaterialIcons
                        name={this.state.mute ? "volume-mute" : "volume-up"}
                        size={45}
                        color="white"
                        onPress={this.handleVolume}
                    />
                    <MaterialIcons
                        name={this.state.play ? "pause" : "play-arrow"}
                        size={45}
                        color="white"
                        onPress={this.handlePlayAndPause}
                    />
                </View>
            </View>
        );
    }
}

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
