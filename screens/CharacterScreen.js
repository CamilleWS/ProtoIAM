//Imports
import React, {Component} from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import BottomSheet from 'reanimated-bottom-sheet'
import { connect } from 'react-redux';

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

class CharacterScreen extends Component {



    constructor(props) {
        super(props)
        this.searchInput = React.createRef();

        this.state = {
            mainColor: '',
            transcript: "",
            allTranscripts: [],
            text: '',
            actualVideo: undefined,
        };
        this.addMessageToChat = this.addMessageToChat.bind(this);
    };
    run_tuto = async () => {
        const soundObject = new Audio.Sound();
        try {
            await soundObject.loadAsync(require('../assets/sound_tuto/tuto_page3.mp3'));
            await soundObject.playAsync();
            // Your sound is playing!
        } catch (error) {
            // An error occurred!
        }
    };
    componentDidMount() {
        this.run_tuto();
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
      }

      checkCharacterQuestion = (characterId, item) =>
      {
            if (characterId == "leonard_de_vinci")
                return (checkLeonardQuestion(item))
            else if (characterId == "marie_curie")
                return (checkMarieCurieQuestion(item))
            else if (characterId == "ramesses")
                return (checkRamsesQuestion(item))
            return ("Error")
      }

      callbackFunction = async (childData) => {
            await this.setState({transcript: childData})
            await this.setState(prevState => ({
                allTranscripts: [...prevState.allTranscripts, childData]
            }));
            await this.setState({actualVideo: this.checkCharacterQuestion(this.props.navigation.state.params.characterId, childData)})

            this.state.allTranscripts.map((item) => {

                let newChatElemUser = {
                        myself: true,
                        message: item
                      }
                this.addMessageToChat(newChatElemUser);

                let newChatElemPerso = {
                      myself: false,
                      message: this.getCharacterAnswerStr(this.props.navigation.state.params.characterId, item)
                    }
                this.addMessageToChat(newChatElemPerso);

            });
      };

    addMessageToChat(value) {
        const action = {type: 'ADD_MESSAGE', value};
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
                {this.props.chat.map((message, index) =>
                    <View key={index} style={[styles.chatMessage, message.myself ? {backgroundColor: this.state.mainColor, alignSelf: 'flex-end'} : {}]}>
                        <Text style={[styles.chatMessageText, message.myself ? {color: 'white'} : {}]}>{message.message}</Text>
                    </View>
                )}
            </View>
        );

    render() {

        let characterId = this.props.navigation.state.params.characterId

        const config = characters.filter(el => el.id === characterId);

        let { name, backgroundImage, mainColor } = config[0];

        if (this.state.mainColor === '')
            this.setState({mainColor});

        return (
            <ImageBackground
                source={backgroundImage === "egypt" ? require('../assets/characters/backgrounds/egypt.jpg') : null}
                imageStyle={{resizeMode: 'cover'}}
                style={[styles.background, {backgroundColor: mainColor}]}>
                <View style={styles.characterContent}>
                    <Tips mainColor={mainColor} parentCallback = {this.callbackFunction} />
                    <CharacterVideo video={this.state.actualVideo} characterId={this.props.navigation.state.params.characterId}> </CharacterVideo>
                    <Talk></Talk>
                </View>
                <View style={{height: 75, width: "100%" }}></View>
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
                <KeyboardAvoidingView
                    behavior="padding"
                    style={{position: 'absolute', bottom: 0, width: '100%', zIndex: 999}}
                    keyboardVerticalOffset={Platform.select({ios: 0, android: 0})}>
                    <View style={[styles.actionSheet, {backgroundColor: mainColor}]}>
                        <SpeechToText parentCallback = {this.callbackFunction}></SpeechToText>
                        {this.props.inputText == 1 ?
                            <TextInput ref={this.searchInput} onChangeText={(text) => this.setState({text})} value={this.state.text} onSubmitEditing = { (e)=> { this.callbackFunction(this.state.text); this.state.text = ''; } } style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', borderRadius: 25, paddingLeft: 15}}/>
                         :
                            <SpeechToText parentCallback = {this.callbackFunction}></SpeechToText>
                        }
                    </View>
                </KeyboardAvoidingView>
                {/*<View style={[styles.actionSheet, {backgroundColor: this.state.mainColor}]}>*/}
                {/*    <View style={styles.recordButton}/>*/}
                {/*</View>*/}
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
        chat: state.message.chat
    });
}
export default connect (mapStateToProps)(CharacterScreen);
