import React from 'react';
import s from './Menu.module.scss'
import {Link } from "react-router-dom";
import logo from '../../assets/mainPage/pixema.svg'

const Menu: React.FC = () => {
    return (
        <div className={s.menu}>
            <div className={s.menuContent}>
                <Link to='/'><img src={logo} alt="" /></Link>
                <div className={s.menuOptions}>
                    <Link to='/'>
                        <p>Home</p>
                    </Link>
                    <Link>
                        <p>Trends</p>
                    </Link>
                    <Link>
                        <p>Favorites</p>
                    </Link>
                    <Link>
                        <p>Settings</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Menu;