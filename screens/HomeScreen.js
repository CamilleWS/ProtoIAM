import React from 'react';
import { StyleSheet,Text, Image, View, Dimensions, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
var indexImage = -1;

export default class App extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            carouselItems: [
                {
                    title:"egypt"
                },
                {
                    title:"vitruve-man"
                },
                {
                    title:"chemist"
                }
            ]}
    }


    _renderItem({item,index}){
         indexImage = indexImage === 2 ? 0 : indexImage += 1;
        return (
            <View style={{flexGrow:1,justifyContent:'center'}}>
            <Image
                source={indexImage === 0 ? require("../assets/images/egypt.jpg") : indexImage === 1 ? require ("../assets/images/vitruve-man.jpg"): require("../assets/images/chemistry.jpg")}
                style={{height:"100%", width:"100%", resizeMode:"cover"}}
            />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Carousel
                    data={this.state.carouselItems}
                    renderItem={this._renderItem}
                    sliderWidth={viewportWidth}
                    itemWidth={viewportWidth}
                    slideStyle={{ width: viewportWidth }}
                    inactiveSlideOpacity={0}
                    inactiveSlideScale={0}
                    loop={true}
                    autoplay={true}
                    autoplayDelssay={0}
                    scrollEnabled={false}
                    autoplayInterval={6000}
                    layout={'tinder'}
                    layoutCardOffset={9}
                />
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity activOpactity={0.5} style={styles.startButton} onPress={() => {this.props.navigation.navigate('sndPage');}}>
                        <View style={{backgroundColor: "white"}}>
                            <Text style={styles.startText}>Commencer l'expérience</Text>
                        </View>
                    </TouchableOpacity>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:"100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    startButton: {
        backgroundColor: "white",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 30
    },
    startText: {
        fontSize: 25,
        fontWeight: '100',
        color: "grey",
    }
});
