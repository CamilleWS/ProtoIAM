import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import TabBarIcon from '../components/TabBarIcon';
import Modal from "react-native-modal";
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    AppRegistry,
    Text,
    Button,
    Dimensions,
    TouchableOpacity,
    Alert,
    TouchableHighlight,
    SafeAreaView,
    FlatList,
    View, ActivityIndicator
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Qui êtes-vous ?',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Parle moi de la Cène.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Quand es-tu décédé ?',
  },
];



class Tips extends React.Component{

    constructor(props) {
         super(props);
         this.state = {
             isModalVisible: false,
         }
         this.tipsBtn = this.tipsBtn.bind(this);
     }

     tipsBtn = (tips) => {
       this.setState({ isModalVisible: !this.state.isModalVisible });
       this.props.parentCallback(tips);
     };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  closModal = () => {
    this.setState({ isModalVisible: false });
  };


  render()  {
      return (
          <View style={[styles.container, {backgroundColor: 'rgba(0, 0, 0, 0)'}]}>
          <TouchableOpacity
          onPress={this.toggleModal.bind(this)}
          style={[styles.actionSheet, {backgroundColor: 'rgba(0, 0, 0, 0.4)'}]}
          >
          <FontAwesome name="question" size={25} color="#FFFFFF" style={styles.recordIcon}/>
          </TouchableOpacity>
          <Modal
          isVisible={this.state.isModalVisible}
          onSwipeComplete={this.toggleModal}
          onBackButtonPress={this.toggleModal}
          onBackdropPress={this.toggleModal}
          backdropColor={this.props.mainColor}
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        style={[{top: '10%'}]}
          swipeDirection={['up', 'down']}>
                <TouchableOpacity
                onPress={this.toggleModal.bind(this)}
                style={[{backgroundColor: 'rgba(0, 0, 0, 0)', width: "100%", height: "100%", position: 'absolute'}]}
                >
                <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.tabBarInfoContainer} onPress={() => this.tipsBtn(item.title)}>
                      <Text style={styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    />
                </TouchableOpacity>
          </Modal>
          </View>
      );

  }
}

const styles = StyleSheet.create({
   container: {
       backgroundColor: '#fff',
       alignItems: 'center',
       top: '10%',
       right: '5%',
       alignItems: 'center',
       justifyContent: 'center',
       position: 'absolute',
       zIndex: 2900000,
   },
    actionSheet: {
        top: '15%',
        right: '5%',
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    recordIcon: {
      // marginTop: 25%,
      // marginLeft:25%
    },
    tabBarInfoContainer: {
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        top: "15%",
        borderRadius: 30,
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
        marginBottom: 10,
    },
});

export default Tips;
