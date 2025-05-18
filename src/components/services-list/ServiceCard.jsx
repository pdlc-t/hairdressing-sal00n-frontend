// src/components/services-list/ServiceCard.jsx

import React, { useContext } from 'react'
import classes from './services-list.module.css'
import scissors from '../../assets/svg_images/service_icons/scissors.svg'
import { MakingAppointmentContext } from '../../context/MakingAppointmentProvider'

const ServiceCard = ({ service }) => {
    const { highlightedService, setHighlightedService } = useContext(MakingAppointmentContext)

    // Używamy porównania po `id`, nie po referencji całego obiektu
    const isActive = highlightedService?.id === service.id

    const handleClick = () => {
        if (isActive) {
            setHighlightedService(null)
        } else {
            setHighlightedService(service)
        }
    }

    return (
        <div
            className={`${classes.serviceCardContainer} ${isActive ? classes.highlighted : ''}`}
            onClick={handleClick}
        >
            <p className={classes.serviceName}>{service.serviceName}</p>
            <img src={scissors} alt="service icon" className={classes.serviceIcon} />
        </div>
    )
}

export default ServiceCard
