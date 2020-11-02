import { combineReducers } from 'redux'
import authUserReducer from './authReducers'
import notesReducers from './noteReducers'

export default combineReducers({
    authUserRedux: authUserReducer,
    notesRedux: notesReducers
})