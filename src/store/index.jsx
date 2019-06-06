/*
 * @Author: wdy
 * @Date: 2019-04-01 11:32:09
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-06-06 11:29:31
 */
import thunk from 'redux-thunk';
import session from 'redux-persist/es/storage/session';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';

const persistConfig = {
  key: 'root',
  storage: session,
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
