import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addService, editService, changeServiceField, clearServiceField} from '../store/actions/actions';

export default function ServiceAdd() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.serviceAdd);

    const handleSetForm = (event) => {
        dispatch(changeServiceField(event.target.name, event.target.value));
    };

    const handleAddEditItem = (event) => {
        event.preventDefault();
        if (data.id) {
            dispatch(editService(data.id, data.name, data.price));
            dispatch(clearServiceField());
        } else if (data.name && data.price) {
            dispatch(addService(data.name, data.price));
            dispatch(clearServiceField());
        }
    };

    const handleReset = () => {
        dispatch(clearServiceField());
    };

    return (
        <div className="add-edit-container">
            <form onSubmit={handleAddEditItem} onReset={handleReset}>
                <input className="input-form" name="name" onChange={handleSetForm} value={data.name}/>
                <input className="input-form" name="price" onChange={handleSetForm} value={data.price}/>
                <button className="btn" type="submit">Save</button>
                <button className="btn" type="reset">Cancel</button>
            </form>
        </div>
    );
}