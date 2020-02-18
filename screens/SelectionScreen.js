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
import {Video, Audio, Sound} from 'expo-av'
import { connect } from 'react-redux';

import { Icon } from 'react-native-elements'


//Data
import characters from '../assets/characters/characters.json';
import leonardStandingVideo from '../assets/videos/presentation/leonard_standing.mov';
import marieCurieStandingVideo from '../assets/videos/presentation/marie_curie_standing.mov';
import ramessesStandingVideo from '../assets/videos/presentation/ramses_standing.mov';
import {Entypo, FontAwesome} from "@expo/vector-icons";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

//Values
const screenWidth = Dimensions.get('screen').width;

class SelectionScreen extends Component {

    soundObject = new Audio.Sound();

    state = {
        characters: [],
        particlesColor: '#EDD9B064'
    };

    setChoseCharacterId(value) {
        const action = {type: 'SET_CHARACTERID', value};
        this.props.dispatch(action);
    }

    runTuto = async () => {
        try {
            // await this.soundObject.loadAsync(require('../assets/sound_tuto/tuto_page2.mp3'));
            // await this.soundObject.playAsync();
        } catch (error) {}
    };

    componentDidMount () {
        this.setState({
            characters
        }, () => { this.onSliderMoveTo(0) });
        // this.runTuto().then(null);

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
                this.setChoseCharacterId(character.id);
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
            <View style={{backgroundColor: 'black', width: '100%', height: '100%'}}>
                <SafeAreaView style={[StyleSheet.absoluteFill, {justifyContent: 'center', alignItems: 'center', marginTop: 185}]}>
                    <Image source={require('../assets/images/logo_light_historia.png')} resizeMode={'center'} style={{width: 200, height: 70}}/>
                    <Carousel
                        data={characters}
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
    actionSheet: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginBottom: 30,
        position:'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        top:-100,
        left:30,
    },
    characterCardVideo: {
        width: '75%',
        height: '75%'
    },
    characterCardName: {
        color: 'white',
        fontSize: 22,
      //  fontFamily: 'Eina01-Bold'
    }
});


const mapStateToProps = (state) => {
    return ({
        mute: state.mute.mute,
        characterId: state.characterId.id
    });
};

export default connect(mapStateToProps)(SelectionScreen);
