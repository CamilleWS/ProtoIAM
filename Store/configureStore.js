import { createStore } from 'redux';
import reducer from './Reducers/index'

// import { combineReducers } from 'redux'
import togglePerso from './Reducers/persoReducer'
// import toggleMessage from './Reducers/messageReducer'

// const combine =  combineReducers({
//     perso: togglePerso,
//     toggleMessage
// })
export default createStore(reducer)