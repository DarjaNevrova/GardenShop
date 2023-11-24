import React from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addAction } from '../../store/slice/cartSlice';
const URLIMAGE = "http://localhost:3333/";

export default function AllProductsItem({ id, product }) {

    const dispatch = useDispatch();
    const addProduct = () => dispatch(addAction(id));

    return (
        <div className={style.cardContainer}>
            <div className={style.productImg}>
                <Link to={`/product/${id}`}>
                    <img src={`${URLIMAGE}${product.image}`} alt={product.title} className={style.productImg} />
                </Link>
                <button onClick={addProduct} className={style.button}>Add to cart</button>
            </div>
            <div className={style.priceContainer}>
                {product.discont_price && <p className={style.discountPrice}>{product.discont_price}$</p>}
                {product.discont_price
                    ? <p className={style.crossedOut}>{product.price}$</p>
                    : <p className={style.price}>{product.price}$</p>
                }
                {product.discont_price && <p className={style.discount}>-{product.discount}%</p>}
            </div>
            <h2>{product.title}</h2>
        </div>
    );
}