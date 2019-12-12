import React from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { Entypo, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements'

class Talk extends React.Component {

    changeIsTalk = () => {
        const action = {type: 'IS_TALKING'};
        this.props.dispatch(action);

        this.sendData(this.props.isTalk);
    };

    changeConversationText = () => {
        const action = {type: 'CONVERSATION_TEXT'};
        this.props.dispatch(action);
    };
    sendData = (transcription) => {
        this.props.parentCallback(transcription);
    };
    render() {
        return (
            <View>
                <Icon
                    raised
                    name={this.props.isTalkIcon}
                    type='entypo'
                    color='#9b59b6'
                    onPress={this.changeIsTalk} />

                <Icon
                    raised
                    name={this.props.conversationTextIcon}
                    type='material-community'
                    color='#9b59b6'
                    onPress={this.changeConversationText} />
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

const mapStateToProps = (state) => {
    return ({
        isTalkIcon: state.perso.isTalkIcon,
        inputText: state.perso.inputText,
        inputTextIcon: state.perso.inputTextIcon,
        conversationTextIcon: state.perso.conversationTextIcon,
        isTalk: state.perso.isTalk
    });
}

export default connect(mapStateToProps)(Talk);
