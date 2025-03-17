import React from 'react'
import ServiceCard from './ServiceCard'
import classes from './services-list.module.css'
import data from '../../test_data/test_sal00n_service_list.json'

const ServicesList = () => {
  return (
    <div className={`${classes.mainContainer}`}>
      <h1>Choose Service</h1>

      {/* TODO: enable handling whole service, not just the name */}
      {data.map((service, index) => (
        <ServiceCard
          key={index}
          service={service}
        />
      ))}
    </div>
  )
}

export default ServicesList
