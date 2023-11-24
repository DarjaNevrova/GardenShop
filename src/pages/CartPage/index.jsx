import React from 'react'
import Container from '../../UI/Container'
import CartItem from '../../components/CartItem'
import { useCart } from '../../hooks/useCart';
import style from './style.module.css';
import OrderDetails from '../../components/OrderDetails';
import { LiaGreaterThanSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import ByCondition from '../../UI/ByCondition';
import EmptyCart from '../../components/EmptyCart';

export default function CartPage() {

  const cart = useCart();

  return (
    <Container>
      <h1 className={style.cartTitle}>Shopping cart</h1>
      {cart.length > 0 && (
        <>
          <Link to={`/all`} className={style.backToStore}>
            Back to the store <LiaGreaterThanSolid />
          </Link>
        </>

      )}
      <div className={style.gridContainer}>
        <div>
          {cart.map((item, index) => (<CartItem key={item.id} {...item} underline={index !== cart.length - 1} />))}
          <ByCondition condition={cart.length === 0}>
            <EmptyCart />
          </ByCondition>
        </div>
        {cart.length > 0 && <OrderDetails />}
      </div>
    </Container>
  );
}