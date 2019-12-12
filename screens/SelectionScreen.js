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

//Values
const screenWidth = Dimensions.get('screen').width;

class SelectionScreen extends Component {

    soundObject = new Audio.Sound();

    state = {
        characters: [],
        particlesColor: '#EDD9B064'
    };

    runTuto = async () => {
        try {
            await this.soundObject.loadAsync(require('../assets/sound_tuto/tuto_page2.mp3'));
            await this.soundObject.playAsync();
        } catch (error) {}
    };

    componentDidMount () {
        this.setState({
            characters
        }, () => { this.onSliderMoveTo(0) });
        this.runTuto().then(null);

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
    characterCardName: {
        color: 'white',
        fontSize: 22,
        fontFamily: 'Eina01-Bold'
    }
});

export default SelectionScreen
