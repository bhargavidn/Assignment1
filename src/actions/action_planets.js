import axios from  'axios';
import React,{ Component } from 'react';

import { PLANETS_URL,FETCHP_ALL,PLANETS_SEARCH_URL,FETCHP_FAILURE } from './action_constants';

export function allPlanetSuc(response){
  return dispatch=>{
    dispatch({type:FETCHP_ALL,response});
  }
}
export function allPlanetError(error){
  return dispatch=>{
    dispatch({type:FETCHP_FAILURE,error});
  }
}
export function getAllPlanets(searchTerm=null){
  const planetURL=searchTerm?PLANETS_SEARCH_URL+searchTerm:PLANETS_URL;
  console.log(planetURL);
  return dispatch=>{
    axios.get(planetURL).
    then(response=>{
      dispatch(allPlanetSuc(response.data));
    });
  }
}
