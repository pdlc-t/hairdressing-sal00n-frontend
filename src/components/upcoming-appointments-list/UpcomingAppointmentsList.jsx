import React from 'react'
import UpcomingAppointmentCard from './UpcomingAppointmentCard'
import classes from './upcoming-appointmenst-list.module.css'
import appointments from '../../test_data/mock_services.json'

const UpcomingAppointmentsList = () => {

  return (
    <div className={`${classes.appointmentsList}`}>
      <h1>Upcoming Appointments</h1>
      <ul>
        {appointments.map((service, index) => (
          <li key={index}>
            <UpcomingAppointmentCard service={service.serviceName} date={service.date} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UpcomingAppointmentsList
