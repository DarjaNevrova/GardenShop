import React, { useState, useRef, useEffect } from 'react';
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
    const searchDiv = useRef(null);

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

    const handleOutsideClick = (e) => {
        if (searchDiv.current && !searchDiv.current.contains(e.target)) {
            setIsSearchVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [dispatch]);

    return (
        <div ref={searchDiv} className={style.search} onClick={(e) => e.stopPropagation()}>
            <AiOutlineSearch onClick={toggleSearchInput} />
            {isSearchVisible && (
                <input
                    value={titlesearch}
                    className={style.searchInput}
                    placeholder="Search..."
                    onChange={searchHandler}
                />
            )}
        </div>
    );
}