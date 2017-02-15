import {FILTER_BY_DATE} from '../constants'

export default (value = {}, action) => {

	const {type, payload} = action;

	switch (type) {
		case FILTER_BY_DATE:
			return payload.value
	}

	return value
}