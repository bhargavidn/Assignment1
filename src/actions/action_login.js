import axios from  'axios';
import React,{ Component } from 'react';

import {LOGGED_SUCCESSFULLY,LOGIN_FAILED,LOGIN_URL,LOG_OUT } from './action_constants';

export function loginError(error,response) {

  return {
    error,
    response,
    type: LOGIN_FAILED };
}
export function logout(name) {
  return {

      type: LOG_OUT,
        name
    
    }
}
export function loginSuccess(response){

  return dispatch => {

      dispatch({ response, type: LOGGED_SUCCESSFULLY })

 };
}
export function loginRequest({results},userData) {
  const {username,password}=userData;
  const userCheck=results[0].name==username;
  const pwdCheck=results[0].birth_year==password;
  return dispatch =>{
    userCheck && pwdCheck?dispatch(loginSuccess(results)):dispatch(loginError("invalid",results));
    }
  }


export function login(userdata){

  const { username,password }= userdata;
  const userName=encodeURIComponent(username);
  return dispatch =>
    axios.get(`${LOGIN_URL}?search=${userName}`).
    then(response=>{
        const { count } = response.data;

          count==0?dispatch(loginError("Invalid",response.data)):dispatch(loginRequest(response.data,userdata));

      });
  }
