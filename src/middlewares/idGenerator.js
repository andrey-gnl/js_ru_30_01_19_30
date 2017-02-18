import {ADD_COMMENT} from '../constants'
import {getRandomID} from '../utils'

export default store => next => action => {
	if (action.type != ADD_COMMENT) return next(action);

	const {payload: {comment}} = action;

	let ID = getRandomID(Object.keys(store.getState().comments));

	comment.id = ID;

	next(action);

}