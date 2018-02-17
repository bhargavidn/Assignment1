import _ from 'lodash';


import {LOGGED_SUCCESSFULLY,LOGIN_FAILED,LOGIN_URL,LOG_OUT } from '../actions/action_constants';

const initialState = {
  userData:[],
  isLoggingIn: false,
  isLoggedIn: false,
  error: null
};


export default function(state=initialState,action){
  switch(action.type){
    case LOG_OUT:
        return {...state,initialState}
    case LOGGED_SUCCESSFULLY:
        return {
          ...state,
            error:null,
            isLoggingIn:false,
            isLoggedIn:true,
            userData:action.response
           }
     case LOGIN_FAILED:
           return {
             ...state,
             error: action.error,
             isLoggingIn: false,
             isLoggedIn: false
           }
          }
  return state;
}
