import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import news_feeder from './news_feeder';

export default combineReducers({
  router: routerReducer,
  news_feeder
});