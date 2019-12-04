//Imports
import React, {Component} from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

//Data
import characters from '../assets/characters/characters.json';

class CharacterScreen extends Component {

    render() {

        const config = characters.filter(el => el.id === this.props.id);

        let { name, backgroundImage, mainColor } = config[0];
        let chat = [
            {
                myself: true,
                message: "Bonjour, je peux te poser une question ?"
            },
            {
                myself: false,
                message: "Salutations ! Je suis Ramses II. Tu peux me poser toutes les questions que tu veux."
            },
            {
                myself: true,
                message: "Quel est votre date de naissance ?"
            },
            {
                myself: false,
                message: "Je suis né en -1304 avant JC."
            },
        ];

        return (
            <ImageBackground
                source={backgroundImage === "egypt" ? require('../assets/characters/backgrounds/egypt.jpg') : null}
                imageStyle={{resizeMode: 'cover'}}
                style={[styles.background, {backgroundColor: mainColor}]}>
                <View style={styles.characterContent}>
                    <Text>Head of Character</Text>
                </View>
                <View style={styles.bottomSheet}>
                    <ScrollView style={styles.chatContent}>
                        {chat.map((message, index) =>
                            <View key={index} style={[styles.chatMessage, message.myself ? {backgroundColor: mainColor, alignSelf: 'flex-end'} : {}]}>
                                <Text style={[styles.chatMessageText, message.myself ? {color: 'white'} : {}]}>{message.message}</Text>
                            </View>
                        )}
                    </ScrollView>
                    <View style={[styles.actionSheet, {backgroundColor: mainColor}]}>
                        <View style={styles.recordButton}/>
                    </View>
                </View>
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
    }
});

export default CharacterScreen;