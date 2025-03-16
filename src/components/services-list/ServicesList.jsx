import React, { useState } from 'react'
import ServiceCard from './ServiceCard'
import classes from './services-list.module.css'

const ServicesList = () => {
  const [highlightedService, setHighlightedService] = useState();

  return (
    <div className={`${classes.mainContainer}`}>
      <h1>Choose Service</h1>

      {/* TODO: enable handling whole service, not just the name */}
      {["Strzyżenie 1", "Strzyżenie 2", "Strzyżenie 3", "Strzyżenie 4", "Strzyżenie 5"].map((service, index) => (
        <ServiceCard
          key={index}
          serviceName={service}
          highlightedService={highlightedService}
          setHighlighted={setHighlightedService}
        />
      ))}
    </div>
  )
}

export default ServicesList
