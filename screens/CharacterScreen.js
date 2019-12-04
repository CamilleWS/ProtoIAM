//Imports
import React, {Component} from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

//Data
import characters from '../assets/characters/characters.json';

class CharacterScreen extends Component {

    render() {

        const config = characters.filter(el => el.id === this.props.id);

        let { name, backgroundImage } = config[0];

        return (
            <ImageBackground source={backgroundImage === "egypt" ? require('../assets/characters/backgrounds/egypt.jpg') : null} imageStyle={{resizeMode: 'cover'}} style={styles.background}>
                <Text>{name}</Text>
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
        backgroundColor: 'red'
    }
});

export default CharacterScreen;