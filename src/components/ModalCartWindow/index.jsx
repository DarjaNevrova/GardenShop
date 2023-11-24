import React from 'react';
import style from './style.module.css';
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';
const URLIMAGE = "http://localhost:3333/";

export default function ModalCartWindow({ toggleModalVisibility }) {

    const cart = useCart();

    return (
        <div
            className={style.container}
            onMouseEnter={() => toggleModalVisibility(true)}
            onMouseLeave={() => toggleModalVisibility(false)}
        >
            <div className={style.gridContainer}>
                {cart.slice(0, 5).map(item => (
                    <div key={item.id} className={style.cardContainer}>
                        <div className={style.itemContainer}>
                            <img src={`${URLIMAGE}${item.image}`} alt={item.title} className={style.image} />
                        </div>
                        <div className={style.detailsContainer}>
                            <p>{item.title}</p>
                            <p>{item.price}$</p>
                            <p className={style.count}>{item.count}</p>
                        </div>
                    </div>
                ))}
            </div>
            {cart.length > 5 && (
                <div className={style.viewAllContainer}>
                    <Link to={`/cart`} className={style.viewAll} >
                        To view all products, go to the cart
                    </Link>
                </div>
            )}
        </div>
    );
}