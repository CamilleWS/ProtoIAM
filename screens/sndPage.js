import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
    navigation,
    Dimensions,
    Animated,
    Easing
} from 'react-native';



class HomeScreen extends Component {

    callFun = () =>
    {
        alert("Leonard");
    }
    callFun2 = () =>
    {
        // this.props.navigation.navigate('Persona1', {"nothing"});
        this.props.navigation.navigate('Persona1', {});
        // alert("marie");
    }
    callFun3 = () =>
    {
        alert("ramses");
    }

    constructor () {
      super()
      this.spinValue = new Animated.Value(0)
    }

    componentDidMount () {
      this.spin()
    }
    spin () {
      this.spinValue.setValue(0)
      Animated.timing(
        this.spinValue,
        {
          toValue: 1,
          duration: 4000,
          easing: Easing.linear
        }
      ).start(() => this.spin())
    }

    render() {
        const spin = this.spinValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg']
        })
        return (
            <View style={styles.mainContainer}>
                <View style={styles.images}>
                    <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun }>
                        <Image source={require('../assets/images/robot-dev.png')} style = {styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun2 }>
                        <Image source={require('../assets/images/robot-dev.png')} style = {styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun3 }>
                        <Image source={require('../assets/images/robot-dev.png')} style = {styles.image} />
                    </TouchableOpacity>
                </View>
                <View style={styles.contentCircle}>
                  <Animated.Image
                    style={{ width: 150, height: 150, transform: [{rotate: spin}]}}
                      source={require('../assets/images/circle.png')}
                  />
                </View>
                <View style={styles.contentCircle}>
                  <Animated.Image
                    style={{ width: 200, height: 200, transform: [{rotate: spin}]}}
                      source={require('../assets/images/circle.png')}
                  />
                </View>
                <View style={styles.contentCircle}>
                    <View style={{width: 90, height: 90, borderRadius: 90/2, backgroundColor: 'red'}}>
                    </View>
                </View>
            </View>
        )
    }
}

HomeScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    // square: {
    //     width: 100,
    //     height: 100,
    //     backgroundColor: 'red'
    // },
    // container: {
    //     // flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'space-around',
        backgroundColor: '#7D5FFF',
    },
    images: {
        // flex: 2,
        flexDirection: "row",
        // alignItems: 'inherit',
        justifyContent: 'space-around',
        paddingTop: 20,
        backgroundColor: '#7D5FFF'
    },
    image: {
        width: 100,
        height: 100,
    },
    contentCircle: {
        justifyContent: 'center',
        // alignItems: 'center',
        position: 'absolute',
        paddingTop: 300,
    },

    logo: {
        width: 375,
        height: 200,
    },
    webButtonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default HomeScreen
