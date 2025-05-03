import React, { useContext } from 'react'
import classes from './appointment-calendar.module.css'
import { MakingAppointmentContext } from '../../pages/make-an-appointment-page/MakeAnAppointmentPage';

const CalendarDayTile = ({ day, isFromActiveMonth, isToday }) => {
  
  const { toggleAppointmentPopup } = useContext(MakingAppointmentContext);

  return (
    <div className={`
      ${classes.dayTile}
      ${isFromActiveMonth ? '' : classes.blackedout}
      ${isToday ? classes.currentDay : ''}
    `}
    onClick={isFromActiveMonth ? toggleAppointmentPopup : undefined}>
      {day}
    </div>
  )
}

export default CalendarDayTile
