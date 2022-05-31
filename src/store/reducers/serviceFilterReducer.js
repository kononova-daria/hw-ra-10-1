import {CHANGE_SERVICE_FILTER, CLEAR_SERVICE_FILTER} from '../actions/actions';
 
 const initialstate = {filter: ''};
 
 export default function serviceAddReducer(state = initialstate, action) {
    switch (action.type) {
       case CHANGE_SERVICE_FILTER:
          return {...state, filter: action.payload};
       case CLEAR_SERVICE_FILTER:
          return {...state, filter: ''};
       default:
          return state;
    }
 }