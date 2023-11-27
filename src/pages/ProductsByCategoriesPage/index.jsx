import React from 'react';
import { useParams } from 'react-router-dom';
import style from './style.module.css';
import { useCalculate } from '../../hooks/useCalculate';
import AllProductsItem from '../../components/AllProductsItem';
import ProductsFilters from '../../components/ProductsFilters';
import Container from '../../UI/Container';

export default function ProductsByCategoriesPage() {

    const { categoryId } = useParams();
    const productsWithDiscounts = useCalculate();

    const result = productsWithDiscounts.filter(product => product.categoryId === +categoryId);

    return (
        <Container>
            <h1 className={style.paragraph}>Tools and equipment</h1>
            <ProductsFilters showDiscountCheckbox={true} />
            <div className={style.container}>
                {
                    result
                        .filter(({ show }) => Object.values(show).every(elem => elem))
                        .map(product => <AllProductsItem key={product.id} id={product.id} product={product} />)
                }
            </div>
        </Container>
    );
}