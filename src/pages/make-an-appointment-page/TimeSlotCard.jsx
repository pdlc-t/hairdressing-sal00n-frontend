import React from 'react';
import classes from './make-an-appointment-page.module.css';

const TimeSlotCard = ({ number }) => {
  const printTimeSlot = () => {
    switch(number) {
      case 1:
        return <h1>8:00 - 10:00</h1>
      case 2:
        return <h1>10:00 - 12:00</h1>
      case 3:
        return <h1>12:00 - 14:00</h1>
      case 4:
        return <h1>14:00 - 16:00</h1>
      case 5:
        return <h1>16:00 - 18:00</h1>
      default:
        return null;
    }
  }

  return (
    <div className={`${classes.timeSlotCard}`}>
      {printTimeSlot()}
      <h1 className={`${classes.choiceButton}`}>choose</h1>
    </div>
  )
}

export default TimeSlotCard