import React, { Component } from 'react';
import { ExpoConfigView } from '@expo/samples';
import {Image,
        Platform,
        ScrollView,
        StyleSheet,
        AppRegistry,
        Text,
        Dimensions,
        TouchableOpacity,
        View} from 'react-native';
import { Video } from 'expo-av'

import { MaterialIcons, Octicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default class SettingsScreen extends Component {

state = {
   mute: false,
   play: false,
   playbackObject:[]
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

render() {
    return (
        <View style={styles.container}>
          <View>
                <Video
                  source={require('../assets/videos/zelda_ghibli.mp4')}
                  ref={this._handleVideoRef}
                  //isMuted={this.state.mute}
                  resizeMode="cover"
                  //shouldPlay //={this.state.play}
                  style={{ width: width, height: 300, backgroundColor: 'black' }}
                />
                <View style={styles.controlBar}>
                    <MaterialIcons
                         name={this.state.mute? "volume-mute" : "volume-up"}
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
           <View style={styles.tabBarInfoContainer}>
                 <Text style={styles.tabBarInfoText}>
                  Question 1
                 </Text>
           </View>
           <View style={styles.tabBarInfoContainer}>
                 <Text style={styles.tabBarInfoText}>
                  Question 2
                 </Text>
           </View>
           <View style={styles.tabBarInfoContainer}>
                 <Text style={styles.tabBarInfoText}>
                  Question 3
                 </Text>
           </View>
        </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: 'Personnality 1',
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
        shadowOffset: { width: 0, height: -3 },
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
