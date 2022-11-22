import React, {FC, useState, useEffect} from 'react';
import {Link, Route, Routes } from "react-router-dom";
import User from '../user/User';
import Card from './card/Card';
import logo from '../../assets/mainPage/pixema.svg'
import s from './GroupCard.module.scss'
import UserBurger from '../user/UserBurger';

// const searchSvg = (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M5 6L19 6M10 12H19M14 18H19" stroke="#AFB2B6" stroke-width="2" stroke-linecap="round"/>
//     </svg>  
// )


const GroupCard: React.FC = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        fetch('http://localhost:3001/movie')
        .then((response) => {
            if (response.ok){
                return response.json()
            }
            throw new Error('Bad response')
        })
        .then((response) => setData(response))
        .catch((error) => console.log(error))
    }, [])

    return (
        <div className={s.main}>
            <div className={s.mainSearchandAva}>
                <Link to='/' className={s.mainLogoTablet}><img src={logo} alt="" /></Link>
                <input placeholder="Search" className={s.mainInput}/>
                <User/>
                <UserBurger/>
            </div>
            <div className={s.mainGroup}>
                {
                    data && data.map((data) => {
                        return <Card key={data.key} id={data.id} title={data.title} age={data.age} img={data.img} genre={data.genre} />
                    })
                }
                
            </div>
            <div className={s.mainButton}>
                <button>Show more</button>
            </div>
        </div>
    );
};

//https://blog.logrocket.com/create-search-bar-react-from-scratch/
export default GroupCard;