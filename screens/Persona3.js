import React, {Component} from 'react';
import {ExpoConfigView} from '@expo/samples';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    AppRegistry,
    Text,
    Dimensions,
    TouchableOpacity,
    Modal,
    Alert,
    TouchableHighlight,
    View, TextInput,
    FlatList
} from 'react-native';
import {Video} from 'expo-av'
import {checkLeonardQuestion} from '../scripts/scriptLeonard'
import {questionLeonard} from '../scripts/scriptLeonard'


import {MaterialIcons, Octicons} from '@expo/vector-icons';

const {width} = Dimensions.get('window');
export default class Persona3 extends Component {

    state = {
        inputColor: '#7D5FFF'
    };

    onQuestionSubmit = (event) => {
        let text = event.nativeEvent.text;
        text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        text = text.replace(/[-_?!. ]/gi, '');
        let videoPath = checkLeonardQuestion(text);
        if (videoPath) {
            this.props.navigation.navigate('VideoModal', {
                video: videoPath
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
                <FlatList
                  data = {questionLeonard()}
                  renderItem= {({item, index}) => {
                      return (
                          <View key={index} style={styles.tabBarInfoContainer}>
                              {/*<TouchableOpacity*/}
                              {/*    onPress={() => {*/}
                              {/*        this.props.navigation.navigate('VideoModal', {*/}
                              {/*            video: require('../assets/videos/ramses/video2.mov')*/}
                              {/*        });*/}
                              {/*    }}>*/}
                              <Text style={styles.tabBarInfoText}>{item}</Text>
                              {/*</TouchableOpacity>*/}
                          </View>)
                  }
                  }
                  keyExtractor = {item => item}

                />
            </View>
        );
    }
}

Persona3.navigationOptions = {
    title: 'Leonard de Vinci',
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
