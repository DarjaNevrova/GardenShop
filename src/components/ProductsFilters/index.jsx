import React, { useEffect, useState } from 'react';
import Container from '../../UI/Container';
import { useDispatch } from 'react-redux';
import { priceFilter, sortFilter, toggleDiscounted } from '../../store/slice/productSlice';
import style from './style.module.css';

export default function ProductsFilters({ showDiscountCheckbox }) {

    const dispatch = useDispatch();

    const [price, setPrice] = useState({ min: 0, max: Infinity })
    const [discounted, setDiscounted] = useState(false);

    useEffect(() => {
        dispatch(toggleDiscounted(discounted));
    }, [dispatch, discounted]);

    useEffect(() => {
        dispatch(priceFilter(price));
    }, [dispatch, price]);

    const handleDiscountChange = (event) => {
        setDiscounted(event.target.checked);
    };

    const priceHandler = {
        min: value => +value,
        max: value => value === '' ? Infinity : +value
    }

    const changePrice = ({ target }) => {
        const { name, value } = target;
        setPrice(state => ({ ...state, [name]: priceHandler[name](value) }))
    }

    const options = [
        { id: 1, title: 'A -> Z', value: 1 },
        { id: 2, title: 'Z -> A', value: 2 },
        { id: 3, title: 'Price: Low to High', value: 3 },
        { id: 4, title: 'Price: High to Low', value: 4 }
    ];

    const orderHandler = (event) => {
        dispatch(sortFilter(+event.target.value))
    }

    return (
        <Container>
            <div className={style.container}>

                <div className={style.inputs}>
                    <p className={style.paragraph}>Price</p>
                    <input
                        className={style.input}
                        type="number"
                        name="min"
                        placeholder="from"
                        value={price.min === 0 ? '' : price.min}
                        onChange={changePrice} />
                    <input
                        className={style.input}
                        type="number"
                        name="max"
                        placeholder="to"
                        value={price.max === Infinity ? '' : price.max}
                        onChange={changePrice}
                    />

                </div>
                {showDiscountCheckbox ? (
                    <div className={style.discounted}>
                        <p>Discounted items</p>
                        <input
                            type="checkbox"
                            className={style.checkbox}
                            checked={discounted}
                            onChange={handleDiscountChange} />
                    </div>
                ) : null}

                <div className={style.sorted}>
                    <p>Sorted</p>
                    <select value="" onChange={orderHandler} className={style.byDefault}>
                        <option value="" disabled>by default</option>
                        {
                            options.map(elem => (
                                <option key={elem.id} value={elem.value} >
                                    {elem.title}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </Container>
    );
}