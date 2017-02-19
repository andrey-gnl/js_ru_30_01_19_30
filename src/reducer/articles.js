import {
    DELETE_ARTICLE,
    LOAD_ALL_ARTICLES,
    FAIL,
    SUCCESS,
    START,
    ADD_COMMENT,
    LOAD_ARTICLE_TEXT} from '../constants'
import {arrayToMap, mapToArr} from '../utils'

const defaultState = {
    isLoading: false,
    entities: arrayToMap([])
}


export default (state = defaultState, action) => {
    const {type, payload } = action
    const normilizedArticles = mapToArr(state.entities);

    switch (type) {
        case DELETE_ARTICLE:
            //fix me - as you wish...
            let filtered = normilizedArticles.filter(article => article.id !== payload.id);

            return {
                ...state,
				entities: arrayToMap(filtered)
			}

        case LOAD_ARTICLE_TEXT: {
			const {response: {text}, postID} = action;
			let withText = {...state}.entities[postID];
			withText.text = text;

			return {
				...state,
				withText
			}
		}

        case ADD_COMMENT: {

			const {comment, postID} = payload;

            let withNewComment = {...state}.entities[postID].comments.push(comment.id);

			return {
				...state,
				withNewComment
			}
		}

		case LOAD_ALL_ARTICLES + START:
            return {...state, isLoading: true}

        case LOAD_ALL_ARTICLES + SUCCESS:
            return {
                ...state,
                entities: arrayToMap(action.response),
                isLoading: false
            }
    }

    return state
}