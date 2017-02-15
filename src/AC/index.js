import {INCREMENT, DELETE_ARTICLE, FILTER_SELECT, FILTER_BY_DATE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}



export function filterSelect(value) {
    return {
        type: FILTER_SELECT,
        payload: { value }
    }
}

export function filterByDate(value) {
	return {
		type: FILTER_BY_DATE,
		payload: { value }
	}
}