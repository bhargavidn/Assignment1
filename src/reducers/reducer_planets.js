import { FETCHP_ALL,FETCHP_FAILURE } from '../actions/action_constants';
import _ from 'lodash';

const initialState={};
export default function(state=initialState,action){
  switch(action.type){
    case FETCHP_FAILURE:
      return {...state,error:action.error};

      case FETCHP_ALL:
        return _.mapKeys(action.response.results,'name');
  }
      return state;
}
