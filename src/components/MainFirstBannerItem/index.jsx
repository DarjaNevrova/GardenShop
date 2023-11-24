import React from 'react';
import style from './style.module.css';
import MainPageImg from '../../images/MainPageImg.png';
import { Link } from 'react-router-dom';

export default function MainFirstBannerItem() {

    return (
        <div className={style.SaleContainer}>
            <div className={style.information}>
                <p>Sale</p>
                <p className={style.secondText}>New season</p>
                <Link to="/sales">
                    <button className={style.btn}>Sale</button>
                </Link>
            </div>
            <div className={style.bush}>
                <img src={MainPageImg} alt="Bush" />
            </div>
        </div>
    )
}