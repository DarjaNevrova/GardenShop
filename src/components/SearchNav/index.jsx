import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../../store/slice/productSlice';
import { AiOutlineSearch } from 'react-icons/ai';
import style from './style.module.css';
import { useNavigate } from 'react-router-dom';

export default function SearchNav() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [titlesearch, setTitleSearch] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearchInput = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    const searchHandler = ({ target }) => {
        dispatch(search(target.value));
        setTitleSearch(target.value);
        if (target.value.length > 0) {
            navigate('/all');
        }
    };

    return (
        <div className={style.search} onClick={toggleSearchInput}>
            <AiOutlineSearch />
            {isSearchVisible && (
                <input
                    value={titlesearch}
                    className={style.searchInput}
                    placeholder="Search..."
                    onChange={searchHandler}
                    onClick={(e) => e.stopPropagation()}
                />
            )}
        </div>
    );
}