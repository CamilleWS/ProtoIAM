import { Platform } from 'react-native';

const initialState = {
    isTalk: 1,
    isTalkIcon : Platform.OS === 'ios' ? 'sound' : 'sound',
    inputText: 1,
    inputTextIcon: Platform.OS === 'ios' ? 'comment' : 'comment',
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
        case 'INPUT_TEXT':
            if (state.inputText == 1) {
                nextState = {
                    ...state,
                    inputText: 0,
                    inputTextIcon: Platform.OS === 'ios' ? 'comment-remove' : 'comment-remove'
                }
            } else {
                nextState = {
                    ...state,
                    inputText: 1,
                    inputTextIcon: Platform.OS === 'ios' ? 'comment' : 'comment',
                }
            }
            return (nextState || state);   
        default:
            return (state);
    }
}

export default togglePerso;