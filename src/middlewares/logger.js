export default store => next => action => {
    console.error('joke 4');
    console.log('before: ', store.getState())
    console.log('---', action)
    next(action)
    console.log('after: ', store.getState())
}