import { combineReducers } from 'redux'
import togglePerso from './persoReducer'
import toggleMessage from './messageReducer'
import toggleMute from './muteReducer'
import toggleCharacterId from './characterIdReducer'

export default combineReducers({
    perso: togglePerso,
    message: toggleMessage,
    mute: toggleMute,
    characterId: toggleCharacterId
})
