import React from 'react'
import { useCalculate } from '../../hooks/useCalculate';
import AllProductsItem from '../../components/AllProductsItem';
import style from './style.module.css';
import ProductsFilters from '../../components/ProductsFilters';
import Container from '../../UI/Container';

export default function AllProductsPage() {

  const productsWithDiscounts = useCalculate();
  const result = productsWithDiscounts.filter(({ show }) => Object.values(show).every(elem => elem))

  
  return (
    <Container>
      <h1 className={style.paragraph}>All products</h1>
      <ProductsFilters showDiscountCheckbox={true} />
      <div className={style.mainContainer}>
        {
          result.map(product => <AllProductsItem key={product.id} id={product.id} product={product} />)
        }
      </div>
    </Container>
  )
}