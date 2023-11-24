import React from 'react';
import style from './style.module.css';
import { useDispatch } from 'react-redux';
import { decr, incr, removeAction } from '../../store/slice/cartSlice';
import Container from '../../UI/Container';
import { Link } from 'react-router-dom';
const URLIMAGE = "http://localhost:3333/";

export default function CartItem({ id, title, image, price, discont_price, count, underline }) {

    const dispatch = useDispatch();
    const decreaseCount = () => count > 1 && dispatch(decr(id));

    const finalPrice = discont_price || price;
    const totalPrice = (finalPrice * count).toFixed(2);

    return (
        <Container className={[style.containerOne, underline ? style.underline : ''].join(' ')}>
            <Link to={`/product/${id}`} className={style.productImage}>
                <img src={`${URLIMAGE}${image}`} alt={title} className={style.productImg} />
            </Link>
            <div className={style.containerTwo}>
                <p>{title}</p>
                <p className={style.totalPrice}> Total Price: {totalPrice} $</p>
                <div className={style.calculate}>
                    <button onClick={decreaseCount}>-</button>
                    <p>{count}</p>
                    <button onClick={() => dispatch(incr(id))}>+</button>
                </div>
            </div>
            <div className={style.containerThree}>
                {discont_price && <p className={style.discountPrice}>{discont_price}$</p>}
                {discont_price
                    ? <p className={style.crossedOut}>{price}$</p>
                    : <p className={style.price}>{price}$</p>
                }
            </div>
            <button className={style.button} onClick={() => dispatch(removeAction(id))}>X</button>
        </Container>
    )
}