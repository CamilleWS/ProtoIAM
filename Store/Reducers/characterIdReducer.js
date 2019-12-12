import { string } from "prop-types";

const initialState = {
    id: string
}

function toggleCharacterId(state = initialState, action) {
    let newState;
    switch (action.type) {
        case "SET_CHARACTERID":
            newState = {
                id: action.value
            }
            return (newState);
        default:
            return (state);
    }
}

export default toggleCharacterId;