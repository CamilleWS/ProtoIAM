import React, {Component} from 'react';
import {ExpoConfigView} from '@expo/samples';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    Button,
    Dimensions,
    TouchableOpacity,
    View,
    TextInput
} from 'react-native';


const { width } = Dimensions.get('window');

export default class Persona1 extends Component {

    state = {
        inputColor: '#7D5FFF'
    };

    onQuestionSubmit = (event) => {
        let text = event.nativeEvent.text;
        text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        text = text.replace(/[-_?!. ]/gi, '');

        if (text.match(/(enterre|entere|tombe|sepulture)/gi)) {
            this.props.navigation.navigate('VideoModal', {
                video: require('../assets/videos/marie_curie/video4.mp4')
            });
            this.setState({
                inputColor: '#7D5FFF'
            });
        } else if (text.match(/(sujet|travail|travaux)/gi)) {
            this.props.navigation.navigate('VideoModal', {
                video: require('../assets/videos/marie_curie/video2.mp4')
            });
            this.setState({
                inputColor: '#7D5FFF'
            });
        } else if (text.match(/(deces|decede|mort)/gi)) {
            this.props.navigation.navigate('VideoModal', {
                video: require('../assets/videos/marie_curie/video3.mp4')
            });
            this.setState({
                inputColor: '#7D5FFF'
            });
        } else if (text.match(/(presenter|presentez|presente|etesvous|estu)/gi)) {
            this.props.navigation.navigate('VideoModal', {
                video: require('../assets/videos/marie_curie/video1.mp4')
            });
            this.setState({
                inputColor: '#7D5FFF'
            });
        } else {
            this.setState({
                inputColor: '#e74c3c'
            });
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder={"Cliquez ici pour poser une question"} style={[styles.questionInput, {borderColor: this.state.inputColor}]} onSubmitEditing={this.onQuestionSubmit}/>
                {this.state.inputColor === '#e74c3c' && <Text style={styles.invalidQuestionText}>Aucun résultat</Text>}
                <Text style={styles.questionHeaderText}>Essayez-moi avec ces questions.</Text>
                <View style={styles.tabBarInfoContainer}>
                    {/*<TouchableOpacity*/}
                    {/*    onPress={() => {*/}
                    {/*        this.props.navigation.navigate('VideoModal', {*/}
                    {/*            video: require('../assets/videos/marie_curie/video1.mp4')*/}
                    {/*        });*/}
                    {/*    }}>*/}
                    <Text style={styles.tabBarInfoText}>Qui êtes-vous ?</Text>
                    {/*</TouchableOpacity>*/}
                </View>
                <View style={styles.tabBarInfoContainer}>
                    {/*<TouchableOpacity*/}
                    {/*  onPress={() => {*/}
                    {/*      this.props.navigation.navigate('VideoModal', {*/}
                    {/*          video: require('../assets/videos/marie_curie/video2.mp4')*/}
                    {/*      });*/}
                    {/*  }}>*/}
                    <Text style={styles.tabBarInfoText}>Quels sont vos travaux ?</Text>
                    {/*</TouchableOpacity>*/}
                </View>
                <View style={styles.tabBarInfoContainer}>
                    {/*<TouchableOpacity*/}
                    {/*onPress={() => {*/}
                    {/*    this.props.navigation.navigate('VideoModal', {*/}
                    {/*        video: require('../assets/videos/marie_curie/video3.mp4')*/}
                    {/*    });*/}
                    {/*}}>*/}
                    <Text style={styles.tabBarInfoText}>Comment êtes-vous morte ?</Text>
                    {/*</TouchableOpacity>*/}
                </View>
                <View style={styles.tabBarInfoContainer}>
                    {/*<TouchableOpacity*/}
                    {/*onPress={() => {*/}
                    {/*    this.props.navigation.navigate('VideoModal', {*/}
                    {/*        video: require('../assets/videos/marie_curie/video4.mp4')*/}
                    {/*    });*/}
                    {/*}}>*/}
                    <Text style={styles.tabBarInfoText}>Où se situe votre sépulture ?</Text>
                    {/*</TouchableOpacity>*/}
                </View>
                <View style={styles.tabBarInfoContainer}>
                  <Button
                  title="coucou"
                     onPress={() => {
                       this.props.navigation.navigate('SpeechToText', {});
                     }}
                   />
             </View>
            </View>
        );
    }
}

Persona1.navigationOptions = {
    title: 'Marie Curie',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    controlBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },

    tabBarInfoContainer: {
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {width: 0, height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
        marginBottom: 10
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    questionInput: {
        borderWidth: 2,
        borderColor: '#7D5FFF',
        borderRadius: 5,
        padding: 3,
        marginTop: 20,
        marginHorizontal: 15,
        fontSize: 17
    },
    questionHeaderText: {
        marginTop: 35,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#7D5FFF',
        textAlign: 'center',
        marginBottom: 10
    },
    invalidQuestionText: {
        marginTop: 5,
        color: '#e74c3c',
        fontSize: 14,
        textAlign: 'center'
    }
});
