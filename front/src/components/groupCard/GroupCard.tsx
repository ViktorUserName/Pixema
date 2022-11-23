import React, {FC, useState, useEffect} from 'react';
import {Link, Route, Routes } from "react-router-dom";
import User from '../user/User';
import Card from './card/Card';
import logo from '../../assets/mainPage/pixema.svg'
import s from './GroupCard.module.scss'
import UserBurger from '../user/UserBurger';
import Search from '../search/Search';



const GroupCard: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [query, setQuery] = useState<String>('');
    

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
            {/* <div className={s.mainSearchandAva}>
                <Link to='/' className={s.mainLogoTablet}><img src={logo} alt="" /></Link>
                <input placeholder="Search" className={s.mainInput}
                onChange={ event => setQuery(event.target.value)}
                />
                <User/>
                <UserBurger/>
            </div> */}

            <Search onChange={event => setQuery((event.target as HTMLInputElement).value)} />
            <div className={s.mainGroup}>
                {
                    data && data.filter((post) => {
                        if (query === ''){
                            return post
                        } else if (
                            post.title.toLowerCase()
                            .includes(query.toLowerCase())
                        ){
                            return post 
                        }
                    }).map((data, index) => {
                        return <Card key={index} id={data.id} title={data.title} age={data.age} img={data.img} genre={data.genre.join(' · ')} />
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