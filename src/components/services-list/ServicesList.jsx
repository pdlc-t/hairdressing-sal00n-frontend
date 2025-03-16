import React from 'react'
import ServiceCard from './ServiceCard'
import classes from './services-list.module.css'

const ServicesList = () => {
  return (
    <div className={`${classes.mainContainer}`}>
      <h1>Choose Service</h1>
      <ServiceCard serviceName={"Strzyżenie 1"}/>
      <ServiceCard serviceName={"Strzyżenie 2"}/>
      <ServiceCard serviceName={"Strzyżenie 3"}/>
      <ServiceCard serviceName={"Strzyżenie 4"}/>
      <ServiceCard serviceName={"Strzyżenie 5"}/>
    </div>
  )
}

export default ServicesList
