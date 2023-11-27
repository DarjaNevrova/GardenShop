import React from 'react';
import { useParams } from 'react-router-dom';
import { useCalculate } from '../../hooks/useCalculate';
import style from './style.module.css';
import { addAction } from '../../store/slice/cartSlice';
import { useDispatch } from 'react-redux';
import NotFound from '../../images/NotFound.webp';
import Container from '../../UI/Container';
const URLIMAGE = "http://localhost:3333/";

export default function SingleProductPage() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const addProduct = () => dispatch(addAction(Number(id)));
    const productsWithDiscount = useCalculate();
    const product = productsWithDiscount.find(item => item.id === Number(id));

    if (!product) {
        return (
            <div className={style.notFound}>
                <h1>Sorry, the product was not found.</h1>
                <img src={NotFound} alt={NotFound} />
            </div>
        )
    }

    const { description, title, image, price, discount, discont_price } = product;

    return (
        <Container>
            <div>
                <h1 className={style.title}>{title}</h1>
                <div className={style.container}>
                    <div className={style.rightContainer}>
                        <img src={`${URLIMAGE}${image}`} alt={title} className={style.image} />
                    </div>
                    <div className={style.leftContainer}>
                        <div className={style.priceGrid}>
                            {
                                discount
                                    ? (
                                        <>
                                            <p className={style.noWrapPrice}>
                                                <span className={style.discont_price}>{discont_price}</span>
                                                <span className={style.boldDollar}>$</span>
                                            </p>
                                            <p className={style.crossedOut}>{price} $</p>
                                            <p className={style.discount}>-{discount}<span className={style.percent}>%</span></p>
                                        </>
                                    )
                                    : (
                                        <p className={style.price}>{price} $</p>
                                    )
                            }
                        </div>
                        <button onClick={addProduct} className={style.button}>To cart</button>
                        <div className={style.line}></div>
                        <div>
                            <p className={style.description}>Description</p>
                            <p className={style.aboutProduct}>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}