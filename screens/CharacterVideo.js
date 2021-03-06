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

    coucou = this.props.isTalk;


    constructor(props) {
      super(props)

      this.standingVideos = {
          "ramesses": require("../assets/videos/presentation/ramses_standing.mp4"),
          "marie_curie": require("../assets/videos/presentation/marie_curie_standing.mp4"),
          "leonard_de_vinci": require("../assets/videos/presentation/leonard_standing.mp4"),
      };
    };

    state = {
        mute: false,
        play: true,
        loop: true,
        playbackObject: [],
        shouldGoIdle: false,
    }

    _onPlaybackStatusUpdate = async (playbackStatus, characterId) => {
        if (playbackStatus.didJustFinish) {
            if (this.state.shouldGoIdle) {
                await this.setState({shouldGoIdle: false, loop: true});
                await this.state.playbackObject.unloadAsync();
                await this.state.playbackObject.loadAsync(this.standingVideos[characterId]);
            }
        }
    };

    _onVideoLoad = async () => {
        await this.state.playbackObject.playFromPositionAsync(0);
    }

    _handleVideoRef = component => {
        this.setState({playbackObject: component})
    }

    changeVideo = async (video) => {
        await this.setState({shouldGoIdle: true, loop: false});
        await this.state.playbackObject.unloadAsync();
        await this.state.playbackObject.loadAsync(video);
    }

    stopVideo = () => {
        (this.state.playbackObject).stopAsync();
        this.setState({mute: false});
        this.setState({play: false});
    }

    handleVolume = () => {
        if (!this.props.isTalk) {
            (this.state.playbackObject).setVolumeAsync(1);
        } else {
            this.state.playbackObject.setVolumeAsync(0);
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
        return (
            <Video
                source={this.standingVideos[this.props.characterId]}
                ref={this._handleVideoRef}
                volume={this.coucou ? 1.0 : 0.0}
                resizeMode="cover"
                shouldPlay={this.state.play}
                isLooping={this.state.loop}
                onLoad={() => this._onVideoLoad()}
                style={{width: 367, height: 300, borderRadius: 15, borderWidth: 3, borderColor: "black"}}
                onPlaybackStatusUpdate={(playbackStatus) => this._onPlaybackStatusUpdate(playbackStatus, this.props.characterId)}
            />
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
