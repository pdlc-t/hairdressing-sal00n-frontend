import React from 'react'
import classes from './services-list.module.css'
import scissors from '../../assets/svg_images/service_icons/scissors.svg'

const ServiceCard = ({ serviceName }) => {
  return (
    <div className={`${classes.serviceCardContainer}`}>
      <p className={`${classes.serviceName}`}>{serviceName}</p>
      <img src={scissors} alt="service icon" className={`${classes.serviceIcon}`}/>
    </div>
  )
}

export default ServiceCard
