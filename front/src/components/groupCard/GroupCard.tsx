import React from 'react';
import Search from '../search/Search';
import User from '../user/User';
import Card from './card/Card';
import s from './GroupCard.module.scss'

// const searchSvg = (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M5 6L19 6M10 12H19M14 18H19" stroke="#AFB2B6" stroke-width="2" stroke-linecap="round"/>
//     </svg>  
// )


const GroupCard = () => {
    return (
        <div className={s.main}>
            <div className={s.mainSearchandAva}>
                <input placeholder="Search" className={s.mainInput}/>
                <User/>
            </div>
            <div className={s.mainGroup}>
                <Card id={1} title='first' img='https://i.ibb.co/MSxfdnt/info1.png' age='22' genre='adventure'/>
                <Card id={1} title='first' img='https://i.ibb.co/MSxfdnt/info1.png' age='22' genre='adventure'/>
                <Card id={1} title='first' img='https://i.ibb.co/MSxfdnt/info1.png' age='22' genre='adventure'/>
                <Card id={1} title='first' img='https://i.ibb.co/MSxfdnt/info1.png' age='22' genre='adventure'/>
                <Card id={1} title='first' img='https://i.ibb.co/MSxfdnt/info1.png' age='22' genre='adventure'/>
                <Card id={1} title='first' img='https://i.ibb.co/MSxfdnt/info1.png' age='22' genre='adventure'/>
                <Card id={1} title='first' img='https://i.ibb.co/MSxfdnt/info1.png' age='22' genre='adventure'/>
                <Card id={1} title='first' img='https://i.ibb.co/MSxfdnt/info1.png' age='22' genre='adventure'/>
            </div>
        </div>
    );
};

//https://blog.logrocket.com/create-search-bar-react-from-scratch/
export default GroupCard;