import React from 'react';
import MainFirstBannerItem from '../../components/MainFirstBannerItem';
import Container from '../../UI/Container';
import MainSecondBannerItem from '../../components/MainSecondBannerItem';
import MainItemCategories from '../../components/MainItemCategories';
import { useSelector } from 'react-redux';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import { useCalculate } from '../../hooks/useCalculate';
import AllProductsItem from '../../components/AllProductsItem';

export default function MainPage() {

  const { list } = useSelector((state) => state.categories);
  const productsWithDiscounts = useCalculate();
  const saleProducts = productsWithDiscounts.filter(product => product.discount && product.discont_price);

  return (
    <Container>
      <div>
        <MainFirstBannerItem />

        <div className={style.categoryTitle}>
          <h1>Catalog</h1>
          <Link to="/category" className={`${style.categoriesButton}`}>All categories</Link>
        </div>

        <div className={style.container}>
          {
            list.slice(0, 4).map(categories => <MainItemCategories key={categories.id} {...categories} />)
          }
        </div>

        <MainSecondBannerItem />

        <div className={style.container}>
          {
            saleProducts.slice(0, 3).map(product => <AllProductsItem key={product.id} id={product.id} product={product} />)
          }
        </div>
      </div>
    </Container>
  )
}