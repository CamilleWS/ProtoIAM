import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
    navigation,
    Dimensions,
    Animated,
    Easing, ImageBackground
} from 'react-native';
import {Video, Audio, Sound} from 'expo-av'
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements'

// const playbackObject = await AudioSound.createAsync(
//   { uri: '../assets/videos/tuto_page2.mp3' },
//   { shouldPlay: true }
// );


class HomeScreen extends Component {

    soundObject = new Audio.Sound();

    callFun = () =>
    {
        this.props.navigation.push('CharacterScreen', { characterId: "leonard_de_vinci" });
        this.soundObject.stopAsync();
    }
    callFun2 = () =>
    {
        this.props.navigation.push('CharacterScreen', { characterId: "marie_curie" });
        this.soundObject.stopAsync();
    }
    callFun3 = () =>
    {
        this.props.navigation.push('CharacterScreen', { characterId: "ramesses" });
        this.soundObject.stopAsync();
    }

    run_tuto = async () => {
        try {
            await this.soundObject.loadAsync(require('../assets/sound_tuto/tuto_page2.mp3'));
            await this.soundObject.playAsync();
            // Your sound is playing!
        } catch (error) {
            // An error occurred!
        }
    }
    muteAll = () => {
        console.log(this.props.mute);
        if (this.props.mute == false) {
            this.soundObject.stopAsync();
            const action = {type: 'MUTE_TUTO'};
            this.props.dispatch(action);
        }
        else {
            this.soundObject.replayAsync();
            const action = {type: 'MUTE_TUTO'};
            this.props.dispatch(action);
        }
    }

    constructor () {
      super()
      this.spinValue = new Animated.Value(0);
      this.spinmValue = new Animated.Value(0);
      this.spineValue = new Animated.Value(0);
      this.run_tuto()
    }

    componentDidMount () {
      this.spin();
      this.spinm();
      this.spine();
    }

    spin () {
      this.spinValue.setValue(0)
      Animated.timing(
        this.spinValue,
        {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear
        }
      ).start(() => this.spin())
    }
    spinm () {
      this.spinmValue.setValue(0)
      Animated.timing(
        this.spinmValue,
        {
          toValue: 1,
          duration: 4000,
          easing: Easing.linear
        }
    ).start(() => this.spinm())
    }
    spine () {
      this.spineValue.setValue(0)
      Animated.timing(
        this.spineValue,
        {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear
        }
    ).start(() => this.spine())
    }

    render() {
        const { goBack } = this.props.navigation;
        const spin = this.spinValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg']
        })
        const spin1 = this.spinmValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['360deg', '0deg']
        })
        const spin2 = this.spineValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg']
        })
        return (
            <View style={styles.mainContainer}>
                <View>
                <Icon
                    raised
                    name='reply'
                    type='font-awesome'
                    color='#8A2BE2'
                    onPress={() => goBack()} />
                <Icon
                    raised
                    name={this.props.mute == false ? 'volume-up' : 'volume-off'}
                    // name='volume-up'
                    type='font-awesome'
                    color='#8A2BE2'
                    onPress={() => this.muteAll()} />
                </View>
                <View style={styles.images}>
                    <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun }>
                    <Video
                        source={require('../assets/videos/presentation/leonard_standing.mov')}
                        isMuted={true}
                        resizeMode="cover"
                        shouldPlay={true}
                        isLooping={true}
                        style = {styles.image}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun2 }>

                    <Video
                        source={require('../assets/videos/presentation/marie_curie_standing.mov')}
                        isMuted={true}
                        resizeMode="cover"
                        shouldPlay={true}
                        isLooping={true}
                        style = {styles.image}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun3 }>
                    <Video
                        source={require('../assets/videos/presentation/ramses_standing.mov')}
                        isMuted={true}
                        resizeMode="cover"
                        shouldPlay={true}
                        isLooping={true}
                        style = {styles.image}
                    />
                    </TouchableOpacity>
                </View>
                <View style={styles.contentCircle}>
                        <View style={{zIndex: 999, opacity: 0.5}}>
                            <Animated.Image
                              style={{transform: [{rotate: spin2}]}}
                                source={require('../assets/images/circle3.png')}
                            />
                        </View>
                      <View>
                          <Animated.Image
                            style={{transform: [{rotate: spin1}]}}
                              source={require('../assets/images/circle2.png')}
                          />
                      </View>
                      <View>
                          <Animated.Image
                            style={{transform: [{rotate: spin}]}}
                              source={require('../assets/images/circle1.png')}
                          />
                      </View>
                      <View style={{zIndex: 999, paddingTop: 76}}>
                      <Image source={require('../assets/images/IAM_logo.png')} style = {{width: 50, height: 50,}} />
                      </View>
                </View>
            </View>
        )
    }
}

HomeScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    images: {
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingTop: 20,
        backgroundColor: '#000000',
        width: 350,
        height: 250,
    },
    image: {
        marginTop:100,
        width: 100,
        height: 100,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#000000',
    },
    contentCircle: {
        // flex:1,
        // backgroundColor: '#0000FF',
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        paddingTop: 400,
    },

    logo: {
        width: 375,
        height: 200,
    },
    webButtonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});


const mapStateToProps = (state) => {
    return ({
            mute: state.mute.mute
    });
}
export default connect (mapStateToProps)(HomeScreen);
