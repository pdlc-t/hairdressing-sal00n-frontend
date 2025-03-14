import React, { useState } from 'react'
import classes from './appointment-calendar.module.css'
import { DateTime, Info, Interval } from 'luxon'

const DaysGrid = () => {
  const today = DateTime.local();
  const [firstDayOfActiveMonth, setFirstDayOfActiveMonth] = useState(today.startOf("month"));
  const daysOfMonth = Interval.fromDateTimes(
    firstDayOfActiveMonth.startOf("week"),
    firstDayOfActiveMonth.endOf("month").endOf("week")
  ).splitBy({day: 1}).map(day => day.start);
  console.log(daysOfMonth);

  return (
    <div className={`${classes.daysGrid}`}>
      {daysOfMonth.map((day, dayIndex) => (
        <div key={dayIndex} className={`${classes.dayTileTest} ${(day.month !== firstDayOfActiveMonth.month) ? classes.blackedout : ''}`}>{day.day}</div>
      ))}
    </div>
  )
}

export default DaysGrid
