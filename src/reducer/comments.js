import {ADD_COMMENT, LOAD_COMMENTS, SUCCESS} from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import {arrayToMap} from '../utils'
import {DefaultReducerState} from './helpers'
import {Record} from 'immutable'

const commentModel = Record({
    id: null,
    text: null,
    user: null
});

const defaultState = new DefaultReducerState();

export default (state = defaultState, action) => {
    const {type, payload, randomId, response} = action;

    switch (type) {
        case LOAD_COMMENTS + SUCCESS:
			return state.updateIn(['entities'],  entities => {
				return entities.merge(arrayToMap(response, commentModel))
			});

		case ADD_COMMENT:
			return state.updateIn(['entities'], entities => {
				return entities.set(randomId, new commentModel({...payload.comment, id: randomId}))
			});
    }

    return state
}