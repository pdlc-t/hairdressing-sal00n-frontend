import React, { useContext } from 'react'
import classes from './appointment-calendar.module.css'
import { MakingAppointmentContext } from '../../pages/make-an-appointment-page/MakeAnAppointmentPage';

const CalendarDayTile = ({ day, isFromActiveMonth, isToday, availability }) => {
  
  const { toggleAppointmentPopup } = useContext(MakingAppointmentContext);

  const availabilityClass = classes[availability] || '';

  return (
    <div className={`
      ${classes.dayTile}
      ${isFromActiveMonth ? '' : classes.blackedout}
      ${isToday ? classes.currentDay : ''}
      ${availabilityClass}
    `}
    onClick={isFromActiveMonth && availability !== "red" ? toggleAppointmentPopup : undefined}>
      {day}
    </div>
  )
}

export default CalendarDayTile
