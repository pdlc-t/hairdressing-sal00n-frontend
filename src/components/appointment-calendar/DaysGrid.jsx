import React from 'react'
import CalendarDayTile from './CalendarDayTile'
import classes from './appointment-calendar.module.css'
import { DateTime, Interval } from 'luxon'

const DaysGrid = ({ firstDayOfActiveMonth }) => {
  const today = DateTime.local();
  // const firstDayOfActiveMonth = today.startOf("month");
  const daysOfMonth = Interval.fromDateTimes(
    firstDayOfActiveMonth.startOf("week"),
    firstDayOfActiveMonth.endOf("month").endOf("week")
  ).splitBy({day: 1}).map(day => day.start);

  return (
    <div className={`${classes.daysGrid}`}>
      {daysOfMonth.map((day, dayIndex) => (
        <CalendarDayTile 
          key={dayIndex} 
          day={day.day}
          isFromActiveMonth={day.month === firstDayOfActiveMonth.month}
          isToday={day.day === today.day && day.month === today.month && day.year === today.year} 
        />
      ))}
    </div>
  )
}

export default DaysGrid
