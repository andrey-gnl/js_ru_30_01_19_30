import {ADD_COMMENT} from '../constants'

export default store => next => action => {
	console.error('joke 3');
	if (action.type != ADD_COMMENT) return next(action);

	const {payload: {comment}, ...rest} = action;
	comment.id = 9999;
	let newComment= {
		[comment.id]: action.payload.comment
	};

	// console.log('****newComment', payload);
	let obj = {type: action.type, payload: {comment: newComment, postID: action.payload.postID}};


	next(obj);

}