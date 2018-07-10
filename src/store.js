import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

export const history = createHistory();

const initialState = {};
const enhancers = [window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()];
const middleware = [thunk];


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['network_state','snackbar_message'] 
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
  const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
  /*
  export default () => {
    let store = createStore(persistedReducer, initialState, composedEnhancers);
    let persistor = persistStore(store)
    return { store, persistor }
  }
*/
export const store = createStore(persistedReducer, initialState, composedEnhancers);
export const persistor =  persistStore(store);

