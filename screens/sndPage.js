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
    Dimensions
} from 'react-native';


// var Square = React.createClass({
// render: function() {
//     return (
//         <View style={styles.square} />
//     )
// }
// });
//
// square: {
//     width: 100;
//     height: 100;
//     backgroundColor: 'red'
// }


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
    render() {
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
                    <View style={styles.circle}>
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
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    images: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        backgroundColor: '#7D5FFF'
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#7D5FFF',
    },
    contentCircle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 150
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        backgroundColor: 'red'
    },
    image: {
        width: 100,
        height: 100,
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
