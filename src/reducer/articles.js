import {DELETE_ARTICLE, LOAD_ALL_ARTICLES, FAIL, SUCCESS, START, ADD_COMMENT} from '../constants'
import {arrayToMap, mapToArr} from '../utils'

const defaultState = {
    isLoading: false,
    entities: arrayToMap([])
}


export default (state = defaultState, action) => {
    const {type, payload } = action
    
    switch (type) {
        case DELETE_ARTICLE:
            //todo fix me
            let filtered = mapToArr(state.entities).filter(article => article.id !== payload.id);

            return {
                ...state,
				entities: arrayToMap(filtered)
			}

        case ADD_COMMENT:
			let normilizedArticles = mapToArr(state.entities);

			let withNewComment = normilizedArticles.map(article => {
				if (article.id == payload.postID) {
					article.comments.push(payload.comment.id);
				}

				return article;
			});

			return {
				...state,
				entities: arrayToMap(withNewComment)
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