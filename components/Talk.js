import React from 'react';
import { StyleSheet } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { Entypo, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

class Talk extends React.Component {

    changeIsTalk = () => {
        const action = {type: 'IS_TALKING'};
        this.props.dispatch(action);
    }

    changeConversationText = () => {
        const action = {type: 'CONVERSATION_TEXT'};
        this.props.dispatch(action);
    }

    changeInputText = () => {
        const action = {type: 'INPUT_TEXT'};
        this.props.dispatch(action);
    }

    render() {
        return (
            <ActionButton buttonColor="rgba(231,76,60,1)" position={"left"}>
                <ActionButton.Item radiua={200} buttonColor='#9b59b6' title="New Task" onPress={this.changeConversationText}>
                    <MaterialCommunityIcons name={this.props.conversationTextIcon} style={styles.actionButtonIcon}/>
                </ActionButton.Item>
                { this.props.inputText == 1 ?
                    <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={this.changeInputText}>
                        <FontAwesome name={this.props.inputTextIcon} style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                :
                    <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={this.changeInputText}>
                        <Ionicons name={this.props.inputTextIcon} style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                }
                <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={this.changeIsTalk}>
                    <Entypo name={this.props.isTalkIcon} style={styles.actionButtonIcon}/>
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
        isTalkIcon: state.perso.isTalkIcon,
        inputText: state.perso.inputText,
        inputTextIcon: state.perso.inputTextIcon,
        conversationTextIcon: state.perso.conversationTextIcon
    });
}

export default connect(mapStateToProps)(Talk);
