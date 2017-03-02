import {SUCCESS, START, LOAD_COMMENTS, GET_COMMENTS_TOTAL} from '../constants'
import {arrayToMap} from '../utils'
import {DefaultReducerState} from './helpers'
import {Record} from 'immutable'

const CommentModel = Record({
	id: null,
	user: null,
	text: null,
})

const defaultState = new DefaultReducerState();


export default (state = defaultState, action) => {
	const {type, payload, randomId, response} = action

	switch (type) {

		case GET_COMMENTS_TOTAL + SUCCESS:
			console.log('TOTAL',response);
			return state.setIn(['total'], response.total)

		case LOAD_COMMENTS + START:
			return state
				.set('isLoading', true)

		case LOAD_COMMENTS + SUCCESS:
			return state
				.setIn(['entities', payload], arrayToMap(response.records, CommentModel))
				.setIn(['isLoading'], false)
	}

	return state
}