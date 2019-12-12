const initialState = {
    mute:false
}

function toggleMute(state = initialState, action) {
    let newState;
    switch (action.type) {
        case "MUTE_TUTO":
            if (state.mute == false) {
                newState = {
                    mute : true
                }
            } else {
                newState = {
                    mute : false
                }
            }
            return (newState);
        default:
            return (state);
    }
}

export default toggleMute;
