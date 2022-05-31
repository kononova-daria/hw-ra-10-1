export const ADD_SERVICE = 'ADD_SERVICE';
export const REMOVE_SERVICE = 'REMOVE_SERVICE';
export const EDIT_SERVICE = 'EDIT_SERVICE';
export const FILTER_SERVICE = 'FILTER_SERVICE';
export const CHANGE_SERVICE_FIELD = 'CHANGE_SERVICE_FIELD';
export const CLEAR_SERVICE_FIELD = 'CLEAR_SERVICE_FIELD';
export const CHANGE_SERVICE_FILTER = 'CHANGE_SERVICE_FILTER';
export const CLEAR_SERVICE_FILTER = 'CLEAR_SERVICE_FILTER';
export const EDIT_SERVICE_FIELD = 'EDIT_SERVICE_FIELD';

export function addService(name, price) {
   return {
      type: ADD_SERVICE, 
      payload: {name, price,},
   };
}
 
export function removeService(id) {
   return {
      type: REMOVE_SERVICE,
      payload: {id,},
   };
}

export function editService(id, name, price) {
   return {
      type: EDIT_SERVICE,
      payload: {id, name, price,},
   };
}

export function filterService(text) {
   return {
      type: FILTER_SERVICE,
      payload: text,
   };
}

export function changeServiceField(name, value) {
   return {
      type: CHANGE_SERVICE_FIELD,
      payload: {name, value},
   };
}

export function clearServiceField() {
   return {
      type: CLEAR_SERVICE_FIELD,
   };
}

export function setServiceFilter(text) {
   return {
      type: CHANGE_SERVICE_FILTER,
      payload: text,
   }
}

export function clearServiceFilter() {
   return {
      type: CLEAR_SERVICE_FILTER,
   }
}

export function setEditServiceField(id, name, price) {
   return {
      type: EDIT_SERVICE_FIELD,
      payload: {id, name, price},
   }
}