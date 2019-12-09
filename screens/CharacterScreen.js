//Imports
import React, {Component} from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Data
import characters from '../assets/characters/characters.json';
import SpeechToText from '../components/SpeechToText'
import Tips from '../components/Tips'
import Talk from '../components/Talk'

class CharacterScreen extends Component {

      constructor(props) {
        super(props)

        this.state = {
            transcript: "",
            allTranscripts: []
        };
      };
      callbackFunction = (childData) => {
            this.setState({transcript: childData})
            this.setState(prevState => ({
                allTranscripts: [...prevState.allTranscripts, childData]
            }));


      };

    render() {

        const config = characters.filter(el => el.id === this.props.id);

        let { name, backgroundImage, mainColor } = config[0];
        // let chat = [
        //     {
        //         myself: true,
        //         message: "Bonjour, je peux te poser une question ?"
        //     },
        //     {
        //         myself: false,
        //         message: "Salutations ! Je suis Ramses II. Tu peux me poser toutes les questions que tu veux."
        //     },
        //     {
        //         myself: true,
        //         message: "Quel est votre date de naissance ?"
        //     },
        //     {
        //         myself: false,
        //         message: "Je suis né en -1304 avant JC."
        //     },
        // ];
        let chat = []
        i = 0;
        this.state.allTranscripts.map(function(item){

            let newChatElemUser = {
                    myself: true,
                    message: item
                  }
            chat.push(newChatElemUser);

            let newChatElemPerso = {
                  myself: false,
                  message: "Salutations ! Je suis Ramses II. Tu peux me poser toutes les questions que tu veux."
                }
            chat.push(newChatElemPerso);


        });

        return (
            <ImageBackground
                source={backgroundImage === "egypt" ? require('../assets/characters/backgrounds/egypt.jpg') : null}
                imageStyle={{resizeMode: 'cover'}}
                style={[styles.background, {backgroundColor: mainColor}]}>
                <View style={styles.characterContent}>
                    <Tips mainColor={mainColor} />
                    <Text>Head of Character</Text>
                    <Talk></Talk>
                </View>
            {this.props.conversationText ?
                <View style={styles.bottomSheet}>
                    <ScrollView   ref={ref => this.scrollView = ref}
                                  style={styles.chatContent}
                                  onContentSizeChange={(contentWidth, contentHeight)=>{
                                      this.scrollView.scrollToEnd({animated: true});
                                  }}>
                        {chat.map((message, index) =>
                            <View key={index} style={[styles.chatMessage, message.myself ? {backgroundColor: mainColor, alignSelf: 'flex-end'} : {}]}>
                                <Text style={[styles.chatMessageText, message.myself ? {color: 'white'} : {}]}>{message.message}</Text>
                            </View>
                        )}
                    </ScrollView>
                    <View style={[styles.actionSheet, {backgroundColor: mainColor}]}>
                        <SpeechToText parentCallback = {this.callbackFunction}></SpeechToText>
                    </View>
                </View>
            :
            <View style={[styles.actionSheet, {backgroundColor: mainColor}]}>
                        <SpeechToText parentCallback = {this.callbackFunction}></SpeechToText>
            </View>
            }
            </ImageBackground>
        )
    }

}

CharacterScreen.propTypes = {
    id: PropTypes.string.isRequired
};

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
        overflow: 'hidden'
    },
    chatContent: {
        flexGrow: 1,
        paddingTop: 15
    },
    actionSheet: {
        width: '100%',
        height: 75,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
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
    }
});

const mapStateToProps = (state) => {
    return ({
        isTalk: state.isTalk,
        conversationText: state.conversationText
    });
}
export default connect (mapStateToProps)(CharacterScreen);
