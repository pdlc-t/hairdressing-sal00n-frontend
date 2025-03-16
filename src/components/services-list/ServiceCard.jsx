import React from 'react'
import classes from './services-list.module.css'
import scissors from '../../assets/svg_images/service_icons/scissors.svg'

const ServiceCard = ({ serviceName, highlightedService, setHighlighted }) => {
  return (
    <div className={`${classes.serviceCardContainer} 
      ${highlightedService === serviceName ? classes.highlighted : ''}`}
      onClick={() => setHighlighted(prev => serviceName === prev ? null : serviceName)}>
      <p className={`${classes.serviceName}`}>{serviceName}</p>
      <img src={scissors} alt="service icon" className={`${classes.serviceIcon}`}/>
    </div>
  )
}

export default ServiceCard
