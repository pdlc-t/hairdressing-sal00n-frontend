import React from 'react'
import UpcomingAppointmentCard from './UpcomingAppointmentCard'
import classes from './upcoming-appointmenst-list.module.css'
import appointments from '../../test_data/mock_services.json'

const UpcomingAppointmentsList = () => {

  return (
    <div className={`${classes.appointmentsList}`}>
      <h1>Upcoming Appointments</h1>
      {appointments.map(service => (
        <UpcomingAppointmentCard service={service.serviceName} date={service.date}/>
      ))}
    </div>
  )
}

export default UpcomingAppointmentsList
