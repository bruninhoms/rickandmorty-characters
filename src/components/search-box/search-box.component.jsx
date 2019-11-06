import React from 'react';
import { DebounceInput } from 'react-debounce-input';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <DebounceInput
        className = 'search'
        type='search'
        placeholder = {placeholder}
        minLength={2}
        debounceTimeout={300}
        onChange={handleChange} 
    />
)