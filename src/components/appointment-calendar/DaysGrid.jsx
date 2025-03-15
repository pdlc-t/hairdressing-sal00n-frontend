import React from 'react'
import classes from './appointment-calendar.module.css'
import { DateTime, Interval } from 'luxon'

const DaysGrid = ({ firstDayOfActiveMonth }) => {
  /* TODO: implement highlighting today */
  const today = DateTime.local();
  // const firstDayOfActiveMonth = today.startOf("month");
  const daysOfMonth = Interval.fromDateTimes(
    firstDayOfActiveMonth.startOf("week"),
    firstDayOfActiveMonth.endOf("month").endOf("week")
  ).splitBy({day: 1}).map(day => day.start);
  console.log(daysOfMonth);

  return (
    <div className={`${classes.daysGrid}`}>
      {daysOfMonth.map((day, dayIndex) => (
        <div key={dayIndex} className={`
          ${classes.dayTileTest} 
          ${(day.month !== firstDayOfActiveMonth.month) ? classes.blackedout : ''}
          ${(day.day === today.day && day.month === today.month && day.year === today.year) ? classes.currentDay : ''}`}>{day.day}</div>
      ))}
    </div>
  )
}

export default DaysGrid
