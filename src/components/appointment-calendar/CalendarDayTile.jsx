import React, { useContext } from 'react'
import classes from './appointment-calendar.module.css'
import {MakingAppointmentContext} from "../../context/MakingAppointmentProvider";

const CalendarDayTile = ({ date, isFromActiveMonth, isToday, availability }) => {
  
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
    `}
    onClick={isFromActiveMonth && availability !== "red" ? handleClick : undefined}>
      {date.day}
    </div>
  )
}

export default CalendarDayTile
