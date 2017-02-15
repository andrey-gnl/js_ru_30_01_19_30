import {FILTER_SELECT} from '../constants'

export default (value = [], action) => {

	const {type, payload} = action;
	
	console.log('payload', payload);

	switch (type) {
		case FILTER_SELECT:
			return payload.value
	}

	return value
}