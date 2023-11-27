import React from 'react'
import { useCart } from '../../hooks/useCart';
import style from './style.module.css';
import InputMask from 'react-input-mask';
import { useDispatch } from 'react-redux';
import { clear } from '../../store/slice/cartSlice';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function OrderDetails() {

  const dispatch = useDispatch();
  const cart = useCart();
  const totalSum = cart.reduce((acc, { count, price }) => acc + count * price, 0).toFixed(2);

  function clearCart() {
    dispatch(clear());
  }

  const notify = () =>
    toast.success("Thank you for your order!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });

  async function fetchAdd(data) {
    const response = await fetch('http://localhost:3333/order/send', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const result = await response.json();
    if (result.status === "OK") {
      clearCart();
    }
    console.log(result)
  }

  const submit = (event) => {
    event.preventDefault();
    const { number } = event.target;

    const phoneNumberRegex = /^\+49 \d{3} \d{3}-\d{2}-\d{2}$/;
    if (!phoneNumberRegex.test(number.value)) {
      toast.error("Error! Please, enter a valid phone number!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    const newProduct = {
      number: number.value,
    }

    console.log(newProduct);
    fetchAdd(newProduct);
    notify();
    event.target.reset();
  };

  return (
    <div className={style.container}>
      <h1 className={style.order}>Order details</h1>
      <div className={style.totalLine}>
        <p>Total</p>
        <p className={style.total}>{totalSum}$</p>
      </div>
      <form onSubmit={submit}>
        <InputMask
          mask="+49 BAA AAA-AA-AA"
          maskChar={null}
          formatChars={{ 'A': '[0-9]', 'B': '[0-9]' }}
          placeholder="Phone number"
        >
          {(inputProps) => <input {...inputProps} name="number" className={style.input} />}
        </InputMask>
        <button type="submit" className={style.button} >Order</button>
      </form>
    </div>
  )
}