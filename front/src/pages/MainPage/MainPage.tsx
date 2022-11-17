import React from 'react';
import Menu from '../../components/menu/Menu';
import s from './MainPage.module.scss'

const MainPage: React.FC = () => {
    return (
        <div className={s.main}>
            <Menu/>
        </div>
    );
};

export default MainPage;