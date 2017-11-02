import {createStore, combineReducers, applyMiddleware} from '../src'
import logger from 'redux-logger'

const actionTypes = '@@redux/INIT'
const reducers = (state = {}, action) => {
  switch(action.type) {
    case actionTypes:
      return {
        'type': actionTypes
      }
    default:
      return state
  }
}
const store = createStore(reducers, applyMiddleware(logger))

const listener1 = store.subscribe(() => {
    console.log('listener1')
})


const listener2 = store.subscribe(() => {
    listener3()
    console.log('listener2')
})


const listener3 = store.subscribe(() => {
    console.log('listener3')
})

store.dispatch({type: actionTypes})