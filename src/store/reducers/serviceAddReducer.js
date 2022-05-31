import {CHANGE_SERVICE_FIELD, CLEAR_SERVICE_FIELD, EDIT_SERVICE_FIELD} from '../actions/actions';
 
 const initialstate = {id: null, name: '', price: '',};
 
 export default function serviceAddReducer(state = initialstate, action) {
    switch (action.type) {
       case CHANGE_SERVICE_FIELD:
          const {name, value} = action.payload;
          return {...state, [name]: value,};
       case CLEAR_SERVICE_FIELD:
          return {name: '', price: '',};
         case EDIT_SERVICE_FIELD:
          return {id: action.payload.id, name: action.payload.name, price: action.payload.price,};
       default:
          return state;
    }
 }