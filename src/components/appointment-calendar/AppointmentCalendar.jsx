import React, { useState } from 'react'
import classes from './appointment-calendar.module.css'
import DaysGrid from './DaysGrid'
import ControlHeader from './ControlHeader'
import { DateTime } from 'luxon'

const AppointmentCalendar = () => {
  /* Control the state of a month to display */
  const [firstDayOfActiveMonth, setFirstDayOfActiveMonth] = useState(DateTime.local().startOf("month"))

  return (
    <div className={`${classes.mainContainer}`}>
      <div className={`${classes.headControls}`}>
        <ControlHeader firstDayOfActiveMonth={firstDayOfActiveMonth} setFirstDayOfActiveMonth={setFirstDayOfActiveMonth}/>
      </div>
      <div className={`${classes.daysContainer}`}>
        {/* Passing information about active month down the tree */}
        <DaysGrid firstDayOfActiveMonth={firstDayOfActiveMonth}/>
      </div>
    </div>
  )
}

export default AppointmentCalendar
