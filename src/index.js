import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {store,persistor} from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import NewsFeeder from './NewsFeeder';

const target = document.querySelector('#root');
render(
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
          <NewsFeeder />
        </PersistGate>  
    </Provider>,
    target
  );

registerServiceWorker();
