import { Platform } from 'react-native';

const initialState = {
    isTalk: 1,
    isTalkIcon : Platform.OS === 'ios' ? 'sound' : 'sound',
    conversationText: 1,
    conversationTextIcon: Platform.OS === 'ios' ? 'comment' : 'comment',
    inputText: 1,
    inputTextIcon: Platform.OS === 'ios' ? 'microphone' : 'microphone',
}

function togglePerso(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'IS_TALKING':
            if (state.isTalk == 1) {
                nextState = {
                    ...state,
                    isTalk: 0,
                    isTalkIcon: Platform.OS === 'ios' ? 'sound-mute' : 'sound-mute'
                }
            } else {
                nextState = {
                    ...state,
                    isTalk: 1,
                    isTalkIcon: Platform.OS === 'ios' ? 'sound' : 'sound'
                }
            }
            return (nextState || state);
        case 'CONVERSATION_TEXT':
            if (state.conversationText == 1) {
                nextState = {
                    ...state,
                    conversationText: 0,
                    conversationTextIcon: Platform.OS === 'ios' ? 'comment-remove' : 'comment-remove'
                }
            } else {
                nextState = {
                    ...state,
                    conversationText: 1,
                    conversationTextIcon: Platform.OS === 'ios' ? 'comment' : 'comment',
                }
            }
            return (nextState || state);   
        case 'INPUT_TEXT':
            if (state.inputText == 1) {
                nextState = {
                    ...state,
                    inputText: 0,
                    inputTextIcon: Platform.OS === 'ios' ? 'md-text' : 'md-text'
                }
            } else {
                nextState = {
                    ...state,
                    inputText: 1,
                    inputTextIcon: Platform.OS === 'ios' ? 'microphone' : 'microphone',
                }
            }
            return (nextState || state);
        default:
            return (state);
    }
}

export default togglePerso;