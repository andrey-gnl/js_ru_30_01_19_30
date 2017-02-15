import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filterSelect from './filterSelect'

export default combineReducers({
    count: counterReducer,
    articles,
    filterSelect
})