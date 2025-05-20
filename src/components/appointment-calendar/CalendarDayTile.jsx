import React, { useContext } from 'react'
import classes from './appointment-calendar.module.css'
import {MakingAppointmentContext} from "../../context/MakingAppointmentProvider";

const CalendarDayTile = ({ date, isFromActiveMonth, isToday, availability, isPast }) => {
  
  const { toggleAppointmentPopup, setDateChoice } = useContext(MakingAppointmentContext);

  const availabilityClass = classes[availability] || '';

  const handleClick = () => {
    console.log(date);
    setDateChoice(date);
    toggleAppointmentPopup();
  }

  return (
    <div className={`
      ${classes.dayTile}
      ${isFromActiveMonth ? '' : classes.blackedout}
      ${isToday ? classes.currentDay : ''}
      ${availabilityClass}
      ${isPast ? classes.pastDay : ''}
    `}
    onClick={isFromActiveMonth && availability !== "red" && !isPast ? handleClick : undefined}>
      {date.day}
    </div>
  )
}

export default CalendarDayTile
