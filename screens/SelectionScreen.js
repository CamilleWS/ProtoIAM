import React, { Component } from 'react';
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
import Carousel from 'react-native-snap-carousel';
import ParticleBackground from "react-native-particle-background";
import {Video, Audio, Sound} from 'expo-av'

import { Icon } from 'react-native-elements'

// const playbackObject = await AudioSound.createAsync(
//   { uri: '../assets/videos/tuto_page2.mp3' },
//   { shouldPlay: true }
// );

//Data
import characters from '../assets/characters/characters.json';
import leonardStandingVideo from '../assets/videos/presentation/leonard_standing.mov';
import marieCurieStandingVideo from '../assets/videos/presentation/marie_curie_standing.mov';
import ramessesStandingVideo from '../assets/videos/presentation/ramses_standing.mov';
import {connect} from "react-redux";
import {Entypo, FontAwesome} from "@expo/vector-icons";

//Values
const screenWidth = Dimensions.get('screen').width;

class SelectionScreen extends Component {

    state = {
        characters: [],
        particlesColor: '#EDD9B064'
    };

    soundObject = new Audio.Sound();

// const playbackObject = new Audio.Sound();
    setChoseCharacterId(value) {
        const action = {type: 'SET_CHARACTERID', value};
        this.props.dispatch(action);
    }

    callFun = () =>
    {
        this.props.navigation.push('CharacterScreen', { characterId: "leonard_de_vinci" });
        this.setChoseCharacterId("leonard_de_vinci");
        this.soundObject.stopAsync();
    }
    callFun2 = () =>
    {
        this.props.navigation.push('CharacterScreen', { characterId: "marie_curie" });
        this.setChoseCharacterId("marie_curie");
        this.soundObject.stopAsync();

        // alert("marie");
    }
    callFun3 = () =>
    {
        this.props.navigation.push('CharacterScreen', { characterId: "ramesses" });
        this.setChoseCharacterId("ramesses");
        this.soundObject.stopAsync();
    }

    runTuto = async () => {
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
        this.runTuto()
    }

    componentDidMount () {
        this.spin();
        this.spinm();
        this.spine();

        this.setState({
            characters
        }, () => { this.onSliderMoveTo(0) });
        this.runTuto().then(null);
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


    onSliderMoveTo = (index) =>
    {
        const character = this.state.characters[index];

        if (character === null)
            return;
        this.setState({particlesColor: character.mainColor + '64'})
    };

    renderCharacterCard = (obj, index) =>
    {
        const character = obj.item;
        let video = null;

        switch(character.id) {
            case 'ramesses':
                video = ramessesStandingVideo;
                break;
            case 'marie_curie':
                video = marieCurieStandingVideo;
                break;
            case 'leonard_de_vinci':
                video = leonardStandingVideo;
                break;
            default:
                video = null;
                break;
        }

        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => {
                this.props.navigation.push('CharacterScreen', { characterId: character.id });
                this.soundObject.stopAsync().then(null);
            }}>
                <View style={[styles.characterCard, {borderBottomColor: character.mainColor}]}>
                    <Video
                        source={video}
                        isMuted={true}
                        resizeMode="cover"
                        shouldPlay={true}
                        isLooping={true}
                        style={styles.characterCardVideo}
                    />
                    <Text style={styles.characterCardName}>{character.name}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    render() {
        const { goBack } = this.props.navigation;

        return (
            <View>

                <ParticleBackground
                    particleColor={this.state.particlesColor}
                    particleSize={8}
                    particleDispersion={32}
                    backgroundColor="black"
                />

                <SafeAreaView style={[StyleSheet.absoluteFill, {justifyContent: 'center', alignItems: 'center', marginTop: 185}]}>
                    <TouchableOpacity
                        onPress={() => this.muteAll()}
                        style={[styles.actionSheet, {backgroundColor: 'rgba(0, 0, 0, 0.4)', left:0}]}>
                        <FontAwesome name={this.props.mute == false ? 'volume-up' : 'volume-off'} size={25} color="#FFFFFF"/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => goBack()}
                        style={[styles.actionSheet, {backgroundColor: 'rgba(0, 0, 0, 0.4)', right:0}]}>
                        <Entypo name='reply' size={25} color="#FFFFFF"/>
                    </TouchableOpacity>

                    <Image source={require('../assets/images/logo_light.png')} resizeMode={'center'} style={{width: 200, height: 70}}/>
                    <Carousel
                        data={this.state.characters}
                        renderItem={this.renderCharacterCard}
                        sliderWidth={screenWidth}
                        itemWidth={screenWidth * 0.6}
                        sliderHeight={250}
                        onBeforeSnapToItem={this.onSliderMoveTo}
                        contentContainerCustomStyle={{alignItems: 'flex-end'}}
                        loop
                    />
                </SafeAreaView>
            </View>
        )
    }
}

SelectionScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    characterCard: {
        width: '100%',
        height: 250,
        backgroundColor: 'black',
        elevation: 3,
        shadowColor: 'black',
        shadowOpacity: 0.22,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        borderRadius: 25,
        margin: 15,
        overflow: 'hidden',
        alignItems: 'center',
        borderBottomWidth: 5,
    },
    characterCardVideo: {
        width: '75%',
        height: '75%'
    },
    actionSheet: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginBottom: 30,
    },
    characterCardName: {
        color: 'white',
        fontSize: 22,
        fontFamily: 'Eina01-Bold'
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
        mute: state.mute.mute,
        characterId: state.characterId.id
    });
}
export default connect (mapStateToProps)(SelectionScreen);

