import React from 'react';
import { StyleSheet,Text, Image, View,SafeAreaView, Dimensions} from 'react-native';

import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class App extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            carouselItems: [
                {
                    path:"../assets/images/egypt.jpg",
                    title:"test1"
                },
                {
                    path:"../assets/images/.jpg",
                    title:"test2"
                },
                {
                    path:"../assets/images/vitruve-man.jpg",
                    title:"test3"
                }
            ]}
    }


    _renderItem({item,index}){
        return (
            <View style={{flexGrow:1,justifyContent:'center'}}>
            <Image
                source={index === 0 ? require("../assets/images/egypt.jpg") : index === 1 ? require ("../assets/images/vitruve-man.jpg"): require("../assets/images/egypt.jpg")}
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
                    enableMomentum={true}
                    sliderWidth={viewportWidth}
                    itemWidth={viewportWidth}
                    slideStyle={{ width: viewportWidth }}
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:"100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
});