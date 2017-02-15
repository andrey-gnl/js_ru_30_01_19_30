import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filterSelect from './filterSelect'
import filterDates from './filterDates'

export default combineReducers({
    count: counterReducer,
    articles,
    filterSelect,
	filterDates
})