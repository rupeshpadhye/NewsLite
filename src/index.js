import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';
import { ConnectedRouter } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import NewsFeeder from './NewsFeeder';

const target = document.querySelector('#root');
render(
    <Provider store={store}>
          <NewsFeeder />
    </Provider>,
    target
  );

registerServiceWorker();
