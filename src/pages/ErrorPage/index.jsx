import React from 'react'
import errorImg from '../../images/errorImg.png';
import style from './style.module.css';
import Container from '../../UI/Container';

export default function ErrorPage() {
    return (
        <Container>
            <div className={style.errorImg}>
                <img src={errorImg} />
            </div>
        </Container>
    )
}