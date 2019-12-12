//Imports
import React, {Component} from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, KeyboardAvoidingView, Platform, BackHandler, Button, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import BottomSheet from 'reanimated-bottom-sheet'
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';


//Data
import characters from '../assets/characters/characters.json';
import SpeechToText from '../components/SpeechToText'
import Tips from '../components/Tips'
import Talk from '../components/Talk'
import CharacterVideo from '../screens/CharacterVideo'
import {getLeonardAnswerStr, checkLeonardQuestion} from '../scripts/scriptLeonard'
import {getMarieCurieAnswerStr, checkMarieCurieQuestion} from '../scripts/scriptMarieCurie'
import {getRamsesAnswerStr, checkRamsesQuestion} from '../scripts/scriptRamses'
import {Audio} from "expo-av";

const soundObject = new Audio.Sound();


class CharacterScreen extends Component {

    constructor(props) {
        super(props)
        this.searchInput = React.createRef();

        this.state = {
            mainColor: '',
            text: '',
            actualVideo: undefined,
            backgroundImage: '',
            name: ''
        };
        this.addMessageToChat = this.addMessageToChat.bind(this);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.renderBottomSheetContent = this.renderBottomSheetContent.bind(this);
    };

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        soundObject.stopAsync();
        this.props.navigation.goBack(null);
        return true;
    }

    run_tuto = async () => {
        try {
            await soundObject.loadAsync(require('../assets/sound_tuto/tuto_page3.mp3'));
            await soundObject.playAsync();
            // Your sound is playing!
        } catch (error) {
            // An error occurred!
        }
    };
    componentDidMount() {
        if (this.props.mute == false)
            this.run_tuto();
    };

    componentDidMount()
    {
        let characterId = this.props.navigation.state.params.characterId;
        const config = characters.filter(el => el.id === characterId);

        let { name, backgroundImage, mainColor } = config[0];

        if (this.state.mainColor === '')
            this.setState({mainColor});
        this.setState({name, backgroundImage});
    };

    getCharacterAnswerStr = (characterId, item) =>
    {
        if (characterId == "leonard_de_vinci")
            return (getLeonardAnswerStr(item))
        else if (characterId == "marie_curie")
            return (getMarieCurieAnswerStr(item))
        else if (characterId == "ramesses")
            return (getRamsesAnswerStr(item))
        return ("Error")
    };

    checkCharacterQuestion = (characterId, item) =>
    {
        if (characterId == "leonard_de_vinci")
            return (checkLeonardQuestion(item))
        else if (characterId == "marie_curie")
            return (checkMarieCurieQuestion(item))
        else if (characterId == "ramesses")
            return (checkRamsesQuestion(item))
        return ("Error")
    };
    changeInputText = () => {
        const action = {type: 'INPUT_TEXT'};
        this.props.dispatch(action);
    }

    callbackFunction = async (childData) => {
        await this.setState({actualVideo: this.checkCharacterQuestion(this.props.navigation.state.params.characterId, childData)})

        let newChatElemUser = {
                myself: true,
                message: childData
                }
        this.addMessageToChat(newChatElemUser);

        let newChatElemPerso = {
                myself: false,
                message: this.getCharacterAnswerStr(this.props.navigation.state.params.characterId, childData)
            }
        this.addMessageToChat(newChatElemPerso);
    };

    addMessageToChat(value) {
        var data = {
            name: this.props.navigation.state.params.characterId,
            value
        }
        const action = {type: 'ADD_MESSAGE', data};
        this.props.dispatch(action);
    }

    renderBottomSheetHeader = () =>
    (
        <View style={styles.header}>
            <View style={[styles.panelHandle, {backgroundColor: this.state.mainColor}]}/>
        </View>
    );

    renderBottomSheetContent = () =>
        (
            <View style={styles.chatContent}>
                {this.props.chat[this.props.characterId] != undefined ?
                    this.props.chat[this.props.characterId].map((message, index) =>
                        <View key={index} style={[styles.chatMessage, message.myself ? {backgroundColor: this.state.mainColor, alignSelf: 'flex-end'} : {}]}>
                            <Text style={[styles.chatMessageText, message.myself ? {color: 'white'} : {}]}>{message.message}</Text>
                        </View>
                    )
                    :
                    null
                }
            </View>
        );
    render() {
        const { goBack } = this.props.navigation;
        const { backgroundImage, mainColor } = this.state;

        return (
            <ImageBackground
                source={backgroundImage === "egypt" ? require('../assets/characters/backgrounds/egypt.jpg') : null}
                imageStyle={{resizeMode: 'cover'}}
                style={[styles.background, {backgroundColor: mainColor}]}>
                <Icon
                    raised
                    name='reply'
                    type='font-awesome'
                    color='#8A2BE2'
                    onPress={() => goBack()} />
                <View style={styles.characterContent}>
                    <Tips mainColor={mainColor} parentCallback = {this.callbackFunction} />
                    <CharacterVideo video={this.state.actualVideo} characterId={this.props.navigation.state.params.characterId}> </CharacterVideo>
                </View>
                 { this.props.conversationText == 1 ?
                    <BottomSheet
                        ref={(ref) => this._bottomSheet = ref }
                        snapPoints={['90%', '40%']}
                        // callbackNode={this._bottomSheetPosition}
                        renderContent={this.renderBottomSheetContent}
                        renderHeader={this.renderBottomSheetHeader}
                        initialSnap={1}
                        springConfig={{toss: 0.8, mass: 0.52}}
                        keyboardShouldPersistTaps="handled"
                    />
                    :
                    null
                 }
                <KeyboardAvoidingView
                    behavior="padding"
                    style={{position: 'absolute', bottom: 0, width: '100%', zIndex: 997}}
                    keyboardVerticalOffset={Platform.select({ios: 0, android: 0})}
                >
                    <View style={[styles.actionSheet, {backgroundColor: mainColor}]}>
                    <TouchableOpacity
                    onPress={this.changeInputText.bind(this)}
                    style={[styles.switchMod, {backgroundColor: 'rgba(0, 0, 0, 0.4)'}]}
                    >
                    {this.props.inputText == 1 ?
                        <FontAwesome name="microphone" size={25} color="#FFFFFF"/>
                        :
                        <FontAwesome name="keyboard-o" size={25} color="#FFFFFF"/>
                    }
                    </TouchableOpacity>
                    {this.props.inputText == 1 ?
                        <TextInput ref={this.searchInput} onChangeText={(text) => this.setState({text})} value={this.state.text} onSubmitEditing = { (e)=> { this.callbackFunction(this.state.text); this.state.text = ''; } } style={{ height: 40, width: '70%', borderBottomColor: 'white', borderBottomWidth: 1, backgroundColor: 'rgb(0,0,0,0)', borderRadius: 25, paddingLeft: 15, left: '25%', position: 'absolute'}}/>
                     :
                        <SpeechToText parentCallback = {this.callbackFunction}></SpeechToText>
                    }
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }

}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
    },
    characterContent: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '40%'
    },
    // bottomSheet:  {
    //     width: '100%',
    //     height: '40%',
    //     backgroundColor: 'white',
    //     borderTopLeftRadius: 25,
    //     borderTopRightRadius: 25,
    //     overflow: 'hidden'
    // },
    chatContent: {
        backgroundColor: 'white',
        paddingTop: 15,
        height: '100%'
    },
    actionSheet: {
        width: '100%',
        height: 75,
        bottom: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: 'black',
        shadowOpacity: 0.22,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        flexDirection:'row'
    },
    switchMod: {
        left: '5%',
        margin: 5,
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
    changeButton: {
        width: '100%',
        height: 150,
        bottom: -5,//mettre 75 pour le remonter
        width: 150,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0,
        shadowColor: 'black',
        shadowOpacity: 0,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 0,
        flexDirection:'row'
    },
    recordButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: 'rgba(0,0,0,0.21)'
    },
    chatMessage: {
        width: '65%',
        backgroundColor: '#E5E6E5',
        borderRadius: 15,
        paddingVertical: 7,
        paddingHorizontal: 11,
        margin: 5
    },
    chatMessageText: {
        fontSize: 17
    },
    header: {
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        paddingTop: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center'
    },
    panelHandle: {
        width: 55,
        height: 5,
        borderRadius: 2,
        backgroundColor: '#DBDBDB',
        marginBottom: 10,
    },
});

const mapStateToProps = (state) => {
    return ({
        isTalk: state.perso.isTalk,
        conversationText: state.perso.conversationText,
        inputText: state.perso.inputText,
        chat: state.message.chat,
        mute : state.mute.mute,
        characterId: state.characterId.id
    });
}
export default connect (mapStateToProps)(CharacterScreen);
