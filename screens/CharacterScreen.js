//Imports
import React, {Component} from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import PropTypes from 'prop-types';
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

class CharacterScreen extends Component {

      constructor(props) {
        super(props)
        this.searchInput = React.createRef();

        this.state = {
            transcript: "",
            allTranscripts: [],
            text: '',
            actualVideo: undefined,
        };
        this.addMessageToChat = this.addMessageToChat.bind(this);
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

    render() {

        let characterId = this.props.navigation.state.params.characterId

        const config = characters.filter(el => el.id === characterId);

        let { name, backgroundImage, mainColor } = config[0];

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
                {this.props.conversationText ?
                    <View style={styles.bottomSheet}>
                        <ScrollView   ref={ref => this.scrollView = ref}
                                      style={styles.chatContent}
                                      onContentSizeChange={(contentWidth, contentHeight)=>{
                                          this.scrollView.scrollToEnd({animated: true});
                                      }}>
                            {this.props.chat.map((message, index) =>
                                <View key={index} style={[styles.chatMessage, message.myself ? {backgroundColor: mainColor, alignSelf: 'flex-end'} : {}]}>
                                    <Text style={[styles.chatMessageText, message.myself ? {color: 'white'} : {}]}>{message.message}</Text>
                                </View>
                            )}
                        </ScrollView>
                    </View>
                : <View style={{width: '100%',height: 80}}></View>
                }
                <KeyboardAvoidingView
                behavior="padding"
                style={{position: 'absolute', bottom: 0, width: '100%'}}
                keyboardVerticalOffset={Platform.select({ios: 0, android: 0})}>
                <View style={[styles.actionSheet, {backgroundColor: mainColor}]}>
                {this.props.inputText == 1 ?
                    <TextInput ref={this.searchInput} onChangeText={(text) => this.setState({text})} value={this.state.text} onSubmitEditing = { (e)=> { this.callbackFunction(this.state.text); this.state.text = ''; } } style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', borderRadius: 25, paddingLeft: 15}}/>
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
        justifyContent: 'center'
    },
    bottomSheet:  {
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        overflow: 'hidden',
        paddingBottom: 75
    },
    chatContent: {
        flexGrow: 1,
        paddingTop: 15
    },
    actionSheet: {
        width: '100%',
        height: 75,
        bottom: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
    },
    chatMessage: {
        width: '65%',
        backgroundColor: '#E5E6E5',
        borderRadius: 15,
        paddingVertical: 7,
        paddingHorizontal: 11,
        margin: 5,
    },
    chatMessageText: {
        fontSize: 17
    }
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
