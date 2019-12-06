import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { Platform } from 'react-native';
import { Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

export default class Talk extends Component {

    state = {
        isTalk : 0,
        isTalkIcon : Platform.OS === 'ios' ? 'sound' : 'sound',
        inputText: 0,
        inputTextIcon: Platform.OS === 'ios' ? 'comment' : 'comment',
    };

    changeIsTalk = () => {
        if (this.state.isTalk == 0) {
            this.setState({
                isTalk: 1,
                isTalkIcon: Platform.OS === 'ios' ? 'sound-mute' : 'sound-mute'
            });
        } else {
            this.setState({
                isTalk: 0,
                isTalkIcon: Platform.OS === 'ios' ? 'sound' : 'sound'
            });
        }
    }

    changeInputText = () => {
        if (this.state.isTalk == 0) {
            this.setState({
                inputText: 1,
                inputTextIcon: Platform.OS === 'ios' ? 'comment-remove' : 'comment-remove'
            });
        } else {
            this.setState({
                inputText: 0,
                inputTextIcon: Platform.OS === 'ios' ? 'comment' : 'comment'
            });
        }
    }

    inputData() {
        var result;
        if (this.state.inputText == 0)
            return (<Text>input Text</Text>)
        else
            return (<Text>put micro</Text>)
    }

    render() {
        return (
        <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
            {/*Rest of App come ABOVE the action button component!*/}
            {/*<View style={{alignItems: "flex-end", height: 75}}>*/}
            <ActionButton buttonColor="rgba(231,76,60,1)" position={"right"}>
                <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => {}}>
                    <AntDesign focused={"black"} name="questioncircle"/>
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={this.changeInputText}>
                    <MaterialCommunityIcons name={this.state.inputTextIcon}/>
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={this.changeIsTalk}>
                    <Entypo name={this.state.isTalkIcon}/>
                </ActionButton.Item>
            </ActionButton>
                {this.inputData()}
        </View>
        );
    }

}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});