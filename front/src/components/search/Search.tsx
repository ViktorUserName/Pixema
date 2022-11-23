import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import {Link } from "react-router-dom";
import User from '../user/User';
import UserBurger from '../user/UserBurger';
import s from './Search.module.scss'
import logo from '../../assets/mainPage/pixema.svg';

interface ISearch {
    onChange: ChangeEventHandler
    // target: event.target as HTMLInputElement

}

const Search: React.FC<ISearch> = (props) => {
    return (
            <div className={s.mainSearchandAva}>
                <Link to='/' className={s.mainLogoTablet}><img src={logo} alt="" /></Link>
                <input placeholder="Search" className={s.mainInput}
                onChange={props.onChange}
                />
                <User/>
                <UserBurger/>
            </div>
    );
};

export default Search;