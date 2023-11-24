import React from 'react'
import { useSelector } from 'react-redux';
import { calculateDiscount } from '../../hooks/useCalculate';
import style from './style.module.css';
import AllProductsItem from '../../components/AllProductsItem';
import Container from '../../UI/Container';
import ProductsFilters from '../../components/ProductsFilters';

export default function AllSalesPage() {

  const { list } = useSelector((state) => state.product);

  const productsWithSale = list.filter(product => product.discont_price != null)
    .map(product => ({
      ...product,
      discount: calculateDiscount(product.price, product.discont_price)
    }));

  return (
    <Container>
      <h1 className={style.paragraph}>Products with sale</h1>
      <ProductsFilters showDiscountCheckbox={false} />
      <div>
        <div className={style.mainContainer}>
          {
            productsWithSale
              .filter(({ show }) => Object.values(show).every(elem => elem))
              .map(product => <AllProductsItem key={product.id} id={product.id} product={product} />)
          }
        </div>
      </div>
    </Container>
  )
}