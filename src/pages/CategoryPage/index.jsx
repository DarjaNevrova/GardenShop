import React from 'react'
import MainItemCategories from '../../components/MainItemCategories';
import { useSelector } from 'react-redux';
import style from './style.module.css';
import Container from '../../UI/Container';

export default function CategoryPage() {

    const { list } = useSelector((state) => state.categories);

    return (
        <Container>
            <h1 className={style.paragraph}>Categories</h1>
            <div className={style.container}>
                {
                    list.map(categories => <MainItemCategories key={categories.id} {...categories} />)
                }
            </div>
        </Container>
    )
}