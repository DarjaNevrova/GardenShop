import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css';
import headImg from '../../images/headImg.jpg';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { useSelector } from 'react-redux';
import ModalCartWindow from '../ModalCartWindow';
import Container from '../../UI/Container';
import { FaBars } from "react-icons/fa";
import SearchNav from '../../components/SearchNav';

export default function Nav() {

    const [active, setActive] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const uniqueItemsCount = useSelector(state => new Set(state.cart.list.map(item => item.id)).size);

    const toggleModalVisibility = (isVisible) => {
        setIsModalVisible(isVisible);
    };

    const linkClick = () => {
        setActive(false);
    };

    return (
        <Container>
            <div className={style.mainContainer}>
                <div className={style.imgContainer}>
                    <Link to={'/'} className={style.imgContainer}>
                        <img className={style.img} src={headImg} alt={headImg}/>
                    </Link>
                </div>
                <div className={style.catalogSearchContainer}>
                    <div className={style.catalog}>
                        <Link to="/category" className={`${style.catalog}`}>Catalog</Link>
                    </div>
                    <SearchNav />
                </div>
                <nav className={[style.linksContainer, active ? style.active : ''].join(' ')}>
                    <Link className={style.links} to={'/'} onClick={linkClick}>Main Page</Link>
                    <Link className={style.links} to={'/all'} onClick={linkClick}>All products</Link>
                    <Link className={style.links} to={'/sales'} onClick={linkClick}>Sales</Link>
                </nav>

                <div className={style.cartContainer}>
                    <Link
                        to={`/cart`}
                        className={style.icon}
                        onMouseEnter={() => toggleModalVisibility(true)}
                        onMouseLeave={() => toggleModalVisibility(false)}
                    >
                        <LiaShoppingBagSolid />
                        {uniqueItemsCount > 0 && <span className={style.itemCount}>{uniqueItemsCount}</span>}
                    </Link>
                    {isModalVisible && <ModalCartWindow toggleModalVisibility={toggleModalVisibility} />}
                </div>
                <button onClick={() => setActive(!active)} className={style.navBtn}>
                    <FaBars />
                </button>
            </div>
        </Container>
    );
}