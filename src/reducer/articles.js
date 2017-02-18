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

        case LOAD_ARTICLE_TEXT:

			let withText = normilizedArticles.map(article => {

				if (article.id == action.postID) {
					return Object.assign({}, article, {text: action.response.text})
				}

				return article;

			});
			
			console.log(normilizedArticles);

			return {
				...state,
				entities: arrayToMap(withText)
			}

        case ADD_COMMENT:

			let withNewComment = normilizedArticles.map(article => {
				if (article.id == payload.postID) {
					return Object.assign({}, article, {comments: [...article.comments, payload.comment.id]})
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