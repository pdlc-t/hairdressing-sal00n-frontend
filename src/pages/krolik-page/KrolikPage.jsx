import React from 'react'
import classes from './krolik.module.css'
import krolik from '../../assets/images/krolik/krolik.jpeg'

const KrolikPage = () => {
  return (
    <div className={`${classes.krolikContainer}`}>
      <img src={krolik} alt="krolik na obrazku" className={`${classes.krolik}`}/>
    </div>
  )
}

export default KrolikPage
