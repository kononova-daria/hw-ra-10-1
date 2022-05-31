import {nanoid} from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE, FILTER_SERVICE} from '../actions/actions';

const initialState = {all: [], filtering: []};

export default function serviceListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SERVICE:
            return {...state, all: [...state.all, {id: nanoid(), name: action.payload.name, price: Number(action.payload.price)}]};
        case REMOVE_SERVICE: 
            const {id} = action.payload;
            const _new_all_remove = state.all.filter(service => service.id!== id);
            const _new_filtering_remove = state.filtering.filter(service => service.id!== id);
            return {...state, all: _new_all_remove, filtering: _new_filtering_remove};
        case EDIT_SERVICE:
            const _new_all_editing = [...state.all];
            const _new_filtering_editing = [...state.filtering];
            const editing = _new_all_editing.findIndex((item) => item.id === action.payload.id);
            const editingFilter = _new_filtering_editing.findIndex((item) => item.id === action.payload.id);
            if (editing > -1) _new_all_editing[editing] = {id: action.payload.id, name: action.payload.name, price: Number(action.payload.price)};
            if (editingFilter > -1) _new_filtering_editing[editingFilter] = {id: action.payload.id, name: action.payload.name, price: Number(action.payload.price)};
            return {...state, all: _new_all_editing, filtering: _new_filtering_editing};
        case FILTER_SERVICE:
            if (action.payload) {
                const _new_filtering = state.all.filter((item) => item.name.includes(action.payload));
                return {...state, filtering: _new_filtering};
            } else {
                return {...state, filtering: [...state.all]};
            }
        default:
            return state;
    }
}