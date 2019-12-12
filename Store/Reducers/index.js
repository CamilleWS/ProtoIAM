import { combineReducers } from 'redux'
import togglePerso from './persoReducer'
import toggleMessage from './messageReducer'

export default combineReducers({
    perso: togglePerso,
    message: toggleMessage,
})