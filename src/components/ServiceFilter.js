import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setServiceFilter, filterService} from '../store/actions/actions';

export default function ServiceFilter() {
    const [filter, setFilterText] = useState('');

    const dispatch = useDispatch();

    const handleSetFilter = (event) => {
        dispatch(setServiceFilter(event.target.value));
        dispatch(filterService(event.target.value));
        setFilterText(event.target.value);
    };

    return (
        <div className="filter-container">
            <input className="filter-input" type="text" onChange={handleSetFilter} value={filter} placeholder="Поиск"/>
        </div>
   );
}