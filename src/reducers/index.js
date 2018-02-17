import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userData from './reducer_login';
import allPlanets from './reducer_planets';


const rootReducer = combineReducers({
  userData,
  allPlanets,
  form:formReducer
});

export default rootReducer;
