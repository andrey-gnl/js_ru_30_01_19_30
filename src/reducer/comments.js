import {ADD_COMMENT} from '../constants'

import {normalizedComments as defaultComments} from '../fixtures'
import {arrayToMap} from '../utils'

const defaultState = arrayToMap(defaultComments)


export default (state = defaultState, action) => {
    const {type, payload} = action
    
    switch (type) {
        case ADD_COMMENT:

			let newComment= {
				[payload.comment.id]: payload.comment
			};

            return Object.assign({}, state, newComment)
    }


	return state
}