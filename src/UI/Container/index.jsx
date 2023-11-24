import React from 'react'
import style from './style.module.css'

export default function Container({ children, className }) {
  return (
    <div className={[style.container, className].join(' ')}>
      {children}
    </div>
  )
} 