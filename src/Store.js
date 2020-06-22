import { combineReducers, createStore, applyMiddleware } from 'redux';
import loginReducer from './Reducers/login';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './src/Store'

const rootReducer = combineReducers({
  login: loginReducer
});

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

export default store;