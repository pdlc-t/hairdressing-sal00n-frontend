import React, { useContext } from 'react'
import classes from './services-list.module.css'
import scissors from '../../assets/svg_images/service_icons/scissors.svg'
import { ServiceChoiceContext } from '../../pages/make-an-appointment-page/MakeAnAppointmentPage'

const ServiceCard = ({ service }) => {
  const {highlightedService, setHighlightedService} = useContext(ServiceChoiceContext);

  return (
    <div className={`${classes.serviceCardContainer} 
      ${highlightedService === service ? classes.highlighted : ''}`}
      onClick={() => setHighlightedService(prev => service === prev ? null : service)}>
      <p className={`${classes.serviceName}`}>{service.name}</p>
      <img src={scissors} alt="service icon" className={`${classes.serviceIcon}`}/>
    </div>
  )
}

export default ServiceCard
