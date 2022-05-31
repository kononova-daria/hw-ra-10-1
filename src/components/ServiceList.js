import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeService, clearServiceField, setEditServiceField,} from '../store/actions/actions';

export default function ServiceList() {
    const allItems = useSelector((state) => state.serviceList.all);
    const filteredItems = useSelector((state) => state.serviceList.filtering);
    const filter = useSelector((state) => state.serviceFilter.filter);

    const dispatch = useDispatch();

    const [items, setItems] = useState(allItems);

    useEffect(() => {
        if (filter) {
            setItems(filteredItems);
        } else {
            setItems(allItems);
        }
    }, [filteredItems, allItems, filter]);

    const handleEdit = (item) => {
        dispatch(setEditServiceField(item.id, item.name, item.price));
    };

    const handleRemove = (id) => {
        dispatch(removeService(id));
        dispatch(clearServiceField());
    };

    return (
        <div className="list-container">
            <ul>{items && items.map((item) => (
                <li key={item.id}>
                    <div className="item-content">{item.name}: {item.price}</div>
                    <div>
                        <button type="button" className="btn" onClick={() => handleEdit(item)}>Edit</button>
                        <button type="button" className="btn" onClick={() => handleRemove(item.id)}>X</button>
                    </div>
                </li>
            ))}</ul>
        </div>
    );
}