/*
 * @Author: wdy
 * @Date: 2019-04-17 15:56:31
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-06-06 11:10:34
 */
import 'antd/dist/antd.css';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Routers from './router';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routers />
    </PersistGate>
  </Provider>
);

export default App;
