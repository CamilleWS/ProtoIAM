const initialState = {
    chat: []
}

function toggleMessage(state = initialState, action) {
    let newState;
    switch (action.type) {
        case "ADD_MESSAGE":
            var name = action.data.name;
            if (state.chat.find(name) == undefined)
            {
                newState = {
                    ...state,
                    name: [action.data.value]
                }
            } else {
                newState = {
                    ...state,
                    name: [...state.chat[name], action.data.value]
                }
            }
            return (newState);
        default:
            return (state);
    }
}

export default toggleMessage;