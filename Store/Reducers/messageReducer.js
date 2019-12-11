const initialState = {
    chat: []
}

function toggleMessage(state = initialState, action) {
    let newState;
    switch (action.type) {
        case "ADD_MESSAGE":
            newState = {
                ...state,
                chat: [...state.chat, action.value]
            }
            return (newState);
        default:
            return (state);
    }
}

export default toggleMessage;