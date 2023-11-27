import React from 'react'
import style from './style.module.css';
import { Link } from 'react-router-dom';
const URL = "http://localhost:3333/";

export default function MainItemCategories({ id, title, image }) {

  return (
    <div className={style.container}>
      <Link to={`/categoryProducts/${id}`}>
        <img src={`${URL}${image}`} alt={title} />
      </Link>
      <p className={style.text}>{title}</p>
    </div>
  )
}