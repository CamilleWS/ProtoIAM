import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
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
                <TouchableOpacity
                    onPress={this.changeIsTalk}
                    style={[styles.actionSheet, {backgroundColor: 'rgba(0, 0, 0, 0.4)'}]}
                >
                    <Entypo name={this.props.isTalkIcon} size={25} color="#FFFFFF" style={styles.recordIcon}/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.changeConversationText}
                    style={[styles.actionSheet, {backgroundColor: 'rgba(0, 0, 0, 0.4)'}]}
                >
                    <MaterialCommunityIcons name={this.props.conversationTextIcon} size={25} color="#FFFFFF" style={styles.changeConversationText}/>
                </TouchableOpacity>

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
    actionSheet: {
        top: '15%',
        right: 0,
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: '#fff',
        top: '10%',
        right: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 2900000,
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
