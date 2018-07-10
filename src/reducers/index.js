import { combineReducers } from 'redux';
import news_feeder from './news_feeder';
import network_state from './network_state';
import snackbar_message from './snackbar_message';

export default combineReducers({
  news_feeder,
  network_state,
  snackbar_message
});