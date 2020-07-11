export const SNACKBAR_MESSAGE = "snackbar/message";
export const DURATION_SMALL =  1000;
export const DURATION_MEDIUM = 3000;
export const DURATION_LARGE = 5000;
const SHOW_SNACKBAR ="snackbar/show";
const HIDE_SNACKBAR ="snackbar/hide";

const intialState = {
    message: undefined,
    duration:DURATION_MEDIUM,
    visible:false
}
export default (state = intialState, action) => {
    switch (action.type) {
      case SNACKBAR_MESSAGE:
        return {...state,message: action.message,visible:true}
      case SHOW_SNACKBAR:
         return {...state, visible:true}  
      case HIDE_SNACKBAR:
         return {...state, visible:false}     
      default:
        return state;
    }
  };

export const showSnackbar = (message,duration=DURATION_MEDIUM) => {
    return dispatch => {
        dispatch({type:SNACKBAR_MESSAGE ,message});
        setTimeout(()=> {
            dispatch({type:HIDE_SNACKBAR});
        },duration);
    }
}

