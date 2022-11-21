import React from 'react';
import s from './Search.module.scss'

const Search = () => {
    return (
        <div className={s.search}>
            <input placeholder="Enter Post Title"/>
        </div>
    );
};

export default Search;