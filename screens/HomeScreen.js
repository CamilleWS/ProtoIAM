import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';

class HomeScreen extends Component {

    openWebsite = async () => {
        await WebBrowser.openBrowserAsync(
            'https://dariusmartin.wixsite.com/iamtech'
        );
    };
    

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.contentContainer}>
                    <View style={{paddingTop: 75}}>
                        <Image
                            resizeMode={'contain'}
                            style={styles.logo}
                            source={require('../assets/images/iam_bg_variant.png')}
                        />
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{paddingTop: 25}}
                        onPress={this.openWebsite}
                    >
                        <Text style={styles.webButtonText}>• Accéder au site web •</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        )
    }
}

HomeScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7D5FFF'
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 75
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
