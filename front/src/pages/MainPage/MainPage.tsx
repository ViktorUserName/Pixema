import React from 'react';
import GroupCard from '../../components/groupCard/GroupCard';
import Menu from '../../components/menu/Menu';
import s from './MainPage.module.scss'

const MainPage: React.FC = () => {
    return (
        <div className={s.main}>
            <Menu/>
            <GroupCard/>
        </div>
    );
};

export default MainPage;