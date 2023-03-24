import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { save, load } from 'redux-localstorage-simple'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, save({ states: ['theme'] })]
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() as typeof compose)
    : compose
const enhancer = composeEnhancers(applyMiddleware(...middleware))
const store = createStore(rootReducer, load({ states: ['theme'] }), enhancer)
sagaMiddleware.run(rootSaga)

export default store
