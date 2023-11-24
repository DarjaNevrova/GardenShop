import React from 'react'
import { useCalculate } from '../../hooks/useCalculate';
import AllProductsItem from '../../components/AllProductsItem';
import style from './style.module.css';
import ProductsFilters from '../../components/ProductsFilters';
import Container from '../../UI/Container';

export default function AllProductsPage() {

  const productsWithDiscounts = useCalculate();

  return (
    <Container>
      <h1 className={style.paragraph}>All products</h1>
      <ProductsFilters showDiscountCheckbox={true} />
      <div className={style.mainContainer}>
        {
          productsWithDiscounts
            .filter(({ show }) => Object.values(show).every(elem => elem))
            .map(product => <AllProductsItem key={product.id} id={product.id} product={product} />)
        }
      </div>
    </Container>
  )
}