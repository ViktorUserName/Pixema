import React from 'react';
import {Link } from "react-router-dom";
import User from '../user/User';
import UserBurger from '../user/UserBurger';
import s from './Search.module.scss'
import logo from '../../assets/mainPage/pixema.svg'

const Search = () => {
    return (
            <div className={s.mainSearchandAva}>
                <Link to='/' className={s.mainLogoTablet}><img src={logo} alt="" /></Link>
                <input placeholder="Search" className={s.mainInput}/>
                <User/>
                <UserBurger/>
            </div>
    );
};

export default Search;