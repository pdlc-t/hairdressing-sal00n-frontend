// src/components/past-appointments-list/PastAppointmentsList.jsx

import React from 'react'
import PastAppointmentCard from './PastAppointmentCard'
import classes from './past-appointmenst-list.module.css'
import appointments from '../../test_data/mock_services.json'

const PastAppointmentsList = () => {
  return (
    <div className={classes.appointmentsList}>
      <h1>Past Appointments</h1>
      <ul>
        {appointments.map((service, index) => (
          <li key={index}>
            <PastAppointmentCard
              service={service.serviceName}
              date={service.date}
              rating={service.rating}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PastAppointmentsList
