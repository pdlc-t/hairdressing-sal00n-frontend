import React from 'react'
import classes from './tiles-grid.module.css'

const ServiceTile = ({image}) => {
  return (
    <div className={`${classes.tile}`}>
      <img src={image} alt="tile icon" className={`${classes.tileIcon}`}></img>
      placeholder
    </div>
  )
}

export default ServiceTile
