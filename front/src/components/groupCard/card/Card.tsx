import React from 'react';
import s from './Card.module.scss'

interface Icard  {
    id: number,
    img: string,
    title: string,
    age: string,
    genre: string
}

const Card: React.FC<Icard> = ({
    img,
    title,
    age,
    genre
}) => {
    return (
        <div className={s.card}>
            <img src={img} alt="" className={s.cardImg}/>
            <div className={s.cardInfo}>
                {title}: {age}
            </div>
            <div className={s.cardGenre}>
                {genre}
            </div>
        </div>
    );
};

export default Card;