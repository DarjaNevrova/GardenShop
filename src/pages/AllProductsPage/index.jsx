import React from 'react'
import { useCalculate } from '../../hooks/useCalculate';
import AllProductsItem from '../../components/AllProductsItem';
import style from './style.module.css';
import ProductsFilters from '../../components/ProductsFilters';
import Container from '../../UI/Container';
import NotFound from '../../images/NotFound.webp';

export default function AllProductsPage() {

  const productsWithDiscounts = useCalculate();

  const result = productsWithDiscounts.filter(({ show }) => Object.values(show).every(elem => elem))

  if (result.length === 0) {
    return (
      <div className={style.notFound}>
        <h1>Sorry, the product was not found.</h1>
        <img src={NotFound} alt={NotFound} />
      </div>
    )
  }
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