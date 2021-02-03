import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../actions/conterActions'

const counterReducter = (state = {value:0}, action) => {

    switch(action.type){
        case INCREMENT_COUNTER:
            return {
                ...state,
                value: state.value + 1
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                value: state.value - 1
            }
        default:
            return {
                ...state
            }
    }

}

export default counterReducter