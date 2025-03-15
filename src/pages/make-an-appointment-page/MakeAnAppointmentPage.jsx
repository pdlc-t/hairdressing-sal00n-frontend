import React from 'react'
import classes from './make-an-appointment-page.module.css'
import AppointmentCalendar from '../../components/appointment-calendar/AppointmentCalendar'

const MakeAnAppointmentPage = () => {
  return (
    <div className={`${classes.main}`}>
      <div className={`${classes.serviceSelectContainer}`}>
        
      </div>
      <div className={`${classes.calendarContainer}`}>
        <AppointmentCalendar />
      </div>
    </div>
  )
}

export default MakeAnAppointmentPage
