import $ from 'jquery'
import {START, SUCCESS, FAIL} from '../constants'

export default store => next => action => {
    console.error('joke 2');
    if (!action.callAPI) return next(action)
    const {callAPI, type, ...rest} = action

    next({...rest, type: type + START})

    //dev only, no need in prod!!!!!
    setTimeout(() => {
        $.get(callAPI)
            .done(response => next({...rest, type: type + SUCCESS, response}))
            .fail(error => next({...rest, type: type + FAIL, error}))
    }, 1000)
}