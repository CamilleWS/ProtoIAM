const initialState = {
    chat: {}
}

function toggleMessage(state = initialState, action) {
    let newState;
    switch (action.type) {
        case "ADD_MESSAGE":
            var name = action.data.name;
            const messageIndex = state.chat.hasOwnProperty(name)
            if (messageIndex === false)
            {
                newState = {
                    chat: {
                        ...state.chat,
                        [name]: [action.data.value]
                    }
                }
            } else {
                newState = {
                    chat: {
                        ...state.chat,
                        [name]: [...state.chat[name], action.data.value]
                    }
                }
            }
            return (newState);
        default:
            return (state);
    }
}

export default toggleMessage;