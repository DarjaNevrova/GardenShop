import React from 'react'
import style from './style.module.css';
import emptyCartImage from '../../images/emptyCartImage.jpg';
import { Link } from 'react-router-dom';
import Container from '../../UI/Container';

export default function EmptyCart() {
    return (
        <Container>
            <div className={style.container}>
                <img src={emptyCartImage} className={style.img} />
                <div>
                    <Link to={`/all`} className={style.goBack}>
                        Go shopping!
                    </Link>
                </div>
            </div>
        </Container>
    )
}
