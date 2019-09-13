import React, {Component} from 'react';
import {ExpoConfigView} from '@expo/samples';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    View
} from 'react-native';

const {width} = Dimensions.get('window');

export default class Persona1 extends Component {

    state = {

    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tabBarInfoContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('VideoModal', {
                                video: require('../assets/videos/zelda_ghibli.mp4')
                            });
                        }}>
                        <Text style={styles.tabBarInfoText}>Pouvez-vous vous présenter ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabBarInfoContainer}>
                    <TouchableOpacity
                      onPress={() => {
                          this.props.navigation.navigate('VideoModal', {
                              video: require('../assets/videos/pexels.mp4')
                          });
                      }}>
                        <Text style={styles.tabBarInfoText}>Sur quels sujets avez-vous travaillée ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabBarInfoContainer}>
                    <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('VideoModal', {
                            video: require('../assets/videos/zelda_ghibli.mp4')
                        });
                    }}>
                        <Text style={styles.tabBarInfoText}>Comment êtes-vous décédée ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabBarInfoContainer}>
                    <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('VideoModal', {
                            video: require('../assets/videos/pexels.mp4')
                        });
                    }}>
                        <Text style={styles.tabBarInfoText}>Où êtes-vous enterrée ?</Text>
                    </TouchableOpacity>
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
});
