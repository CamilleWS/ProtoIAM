import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';

class Talk extends React.Component {

    changeIsTalk = () => {
        const action = {type: 'IS_TALKING'};
        this.props.dispatch(action);
    }

    changeInputText = () => {
        const action = {type: 'INPUT_TEXT'};
        this.props.dispatch(action);
    }

    render() {
        return (
            <ActionButton buttonColor="rgba(231,76,60,1)" position={"right"}>
                <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => {}}>
                    <AntDesign focused={"black"} name="questioncircle"/>
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={this.changeInputText}>
                    <MaterialCommunityIcons name={this.props.inputTextIcon}/>
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={this.changeIsTalk}>
                    <Entypo name={this.props.isTalkIcon}/>
                </ActionButton.Item>
            </ActionButton>
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

const mapStateToProps = (state) => {
    return ({
        isTalkIcon: state.isTalkIcon,
        inputTextIcon: state.inputTextIcon
    });
}

export default connect(mapStateToProps)(Talk);