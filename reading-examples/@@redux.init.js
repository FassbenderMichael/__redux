import {createStore, combineReducers, applyMiddleware} from '../src'
import logger from 'redux-logger'

const actionTypes = '@@redux/INIT'

const reducers = (state = {}, action) => {
  switch(action.type) {
    case actionTypes:
      console.log('hello @@redux/INIT')
      return {
        'type': actionTypes
      }
    default:
      return state
  }
}

const store = createStore(reducers, applyMiddleware(logger))

console.log('*************************************')
console.log(store.getState())
console.log('*************************************')
