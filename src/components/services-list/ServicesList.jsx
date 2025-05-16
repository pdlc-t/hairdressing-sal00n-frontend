import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'
import classes from './services-list.module.css'
import data from '../../test_data/test_sal00n_service_list.json'

const ServicesList = () => {

  const [services, setServices] = useState();
  const [fetchingError, setFetchingError] = useState();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/services');
        const servicesData = await response.json();
        setServices(servicesData);
      } catch (e) {
        console.log("error while fetching appointments: " + e)
        setFetchingError("An error occured when trying to fetch data from the server :(")
      }
    }

    fetchServices();
  }, [])

  if (fetchingError) return <h1>{fetchingError}</h1>
  if (!services) return <h1>Fetching services...</h1>

  return (
    <div className={`${classes.mainContainer}`}>
      <h1>Choose Service</h1>

      {/* TODO: enable handling whole service, not just the name */}
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          service={service}
        />
      ))}
    </div>
  )
}

export default ServicesList
