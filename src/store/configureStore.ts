import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { save, load } from 'redux-localstorage-simple'
import rootReducer from './rootReducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, save()]

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() as typeof compose)
    : compose

const enhancer = composeEnhancers(applyMiddleware(...middleware))

const store = createStore(rootReducer, load(), enhancer)

export default store
