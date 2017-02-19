import {ADD_COMMENT} from '../constants'
import {getRandomID} from '../utils'

export default store => next => action => {
	//через мидлвары будут проходить все экшины, суть в том, что делать их нужно максимально реюзабильными. Не завязывайся на один экшин
	if (action.type != ADD_COMMENT) return next(action);

	const {payload: {comment}} = action;

	let ID = getRandomID(Object.keys(store.getState().comments));

	comment.id = ID;

	next(action);

}
