import {ADD_COMMENT} from '../constants'

import {normalizedComments as defaultComments} from '../fixtures'
import {arrayToMap} from '../utils'

const defaultState = arrayToMap(defaultComments)


export default (state = defaultState, action) => {
    const {type, payload} = action
    
    switch (type) {
        case ADD_COMMENT:
            // console.warn('xxxxxxxxxxx');
            let newObj = Object.assign({}, state, payload.comment)
            return newObj;
            // return state
    }
	// console.warn('xxxxxxxxxxx');


	return state
}