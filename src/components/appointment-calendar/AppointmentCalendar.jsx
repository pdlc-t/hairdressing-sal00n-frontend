import React from 'react'
import classes from './appointment-calendar.module.css'
import DaysGrid from './DaysGrid'
import ControlHeader from './ControlHeader'

const AppointmentCalendar = () => {
  return (
    <div className={`${classes.mainContainer}`}>
      <div className={`${classes.headControls}`}>
        <ControlHeader />
      </div>
      <div className={`${classes.daysContainer}`}>
        <DaysGrid />
      </div>
    </div>
  )
}

export default AppointmentCalendar
