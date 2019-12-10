//Imports
import React, {Component} from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import BottomSheet from 'reanimated-bottom-sheet'

//Data
import characters from '../assets/characters/characters.json';

class CharacterScreen extends Component {

    state = {
        mainColor: '',
        chat: [
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
        ]
    };

    renderBottomSheetHeader = () =>
    (
        <View style={styles.header}>
            <View style={[styles.panelHandle, {backgroundColor: this.state.mainColor}]}/>
        </View>
    );

    renderBottomSheetContent = () =>
    (
        <View style={styles.chatContent}>
            <View>
                {this.state.chat.map((message, index) =>
                    <View key={index} style={[styles.chatMessage, message.myself ? {backgroundColor: this.state.mainColor, alignSelf: 'flex-end'} : {}]}>
                        <Text style={[styles.chatMessageText, message.myself ? {color: 'white'} : {}]}>{message.message}</Text>
                    </View>
                )}
            </View>
        </View>
    );

    render() {

        const config = characters.filter(el => el.id === this.props.id);

        let { name, backgroundImage, mainColor } = config[0];

        if (this.state.mainColor === '')
            this.setState({mainColor});

        return (
            <ImageBackground
                source={backgroundImage === "egypt" ? require('../assets/characters/backgrounds/egypt.jpg') : null}
                imageStyle={{resizeMode: 'cover'}}
                style={[styles.background, {backgroundColor: mainColor}]}>
                <View style={styles.characterContent}>
                    <Text>Head of Character</Text>
                </View>
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
                <View style={[styles.actionSheet, {backgroundColor: this.state.mainColor}]}>
                    <View style={styles.recordButton}/>
                </View>
                {/*<View style={styles.bottomSheet}>*/}
                {/*    /!*<ScrollView style={styles.chatContent}>*!/*/}

                {/*    /!*</ScrollView>*!/*/}
                {/*    <LinearGradient*/}
                {/*        colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']}*/}
                {/*        style={styles.chatTopGradient}*/}
                {/*    />*/}
                {/*    <LinearGradient*/}
                {/*        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.25)']}*/}
                {/*        style={styles.chatBottomGradient}*/}
                {/*    />*/}
                {/*</View>*/}
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
        position: 'absolute',
        zIndex: 999,
        bottom: 0,
        width: '100%',
        height: 75,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: 'black',
        shadowOpacity: 0.22,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
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
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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

export default CharacterScreen;