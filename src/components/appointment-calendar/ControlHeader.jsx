import React from 'react'
import classes from './appointment-calendar.module.css'

const ControlHeader = () => {
  return (
    <div className={`${classes.headControlsContainer}`}>
      <div className={`${classes.controls}`}>
        controls
      </div>
      <div className={`${classes.weekdays}`}>
        <p>Mon</p>
        <p>Tues</p>
        <p>Wed</p>
        <p>Thurs</p>
        <p>Fri</p>
        <p>Sat</p>
        <p>Sun</p>
      </div>
    </div>
  )
}

export default ControlHeader
