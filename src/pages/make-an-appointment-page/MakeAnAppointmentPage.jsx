import React from 'react'
import classes from './make-an-appointment-page.module.css'
import AppointmentCalendar from '../../components/appointment-calendar/AppointmentCalendar'
import ServicesList from '../../components/services-list/ServicesList'

const MakeAnAppointmentPage = () => {
  return (
    <div className={`${classes.main}`}>
      <div className={`${classes.serviceSelectContainer}`}>
        <ServicesList />
      </div>
      <div className={`${classes.calendarContainer}`}>
        <AppointmentCalendar />
      </div>
    </div>
  )
}

export default MakeAnAppointmentPage
