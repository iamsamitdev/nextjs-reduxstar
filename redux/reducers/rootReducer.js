import {combineReducers} from 'redux'
import counterReducter from './counterReducter'

const rootReducer = combineReducers({
    counter: counterReducter
})

export default rootReducer