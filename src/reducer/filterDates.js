import {FILTER_BY_DATE} from '../constants'

//не дроби редюсеры слишком сильно: объедини селект и календарь в один
export default (value = {}, action) => {

	const {type, payload} = action;

	switch (type) {
		case FILTER_BY_DATE:
			return payload.value
	}

	return value
}
