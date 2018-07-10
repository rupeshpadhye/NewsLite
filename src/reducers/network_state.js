import { SNACKBAR_MESSAGE } from "./snackbar_message";
import { REHYDRATE } from "./news_feeder";
const OFFLINE = "news/offline";
const ONLINE = "news/online";

const intialState = {
    status:'online',
}
export default (state = intialState, action) => {
    switch (action.type) {
      case OFFLINE:
        return { status:'offline' }
      case ONLINE:
        return { status:'online' }  
      default:
        return state;
    }
  };

export const setStateAsOffline = () => {
    return dispatch => {
        dispatch({type:OFFLINE});
    }
}

export const setStateAsOnline = () => {
    return dispatch => {
        dispatch({type:ONLINE});
    }
}