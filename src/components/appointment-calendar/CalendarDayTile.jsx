import React from 'react'
import classes from './appointment-calendar.module.css'

const CalendarDayTile = ({ day, isFromActiveMonth, isToday }) => {
  return (
    <div className={`
      ${classes.dayTile}
      ${isFromActiveMonth ? '' : classes.blackedout}
      ${isToday ? classes.currentDay : ''}
    `}>
      {day}
    </div>
  )
}

export default CalendarDayTile
