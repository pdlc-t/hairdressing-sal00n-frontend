import React, { useContext } from 'react';
import classes from './make-an-appointment-page.module.css';
import { MakingAppointmentContext } from '../../pages/make-an-appointment-page/MakeAnAppointmentPage';

const TimeSlotCard = ({ number, isActive }) => {

  const { dateChoice, highlightedService, toggleAppointmentPopup } = useContext(MakingAppointmentContext);

  const handleChoiceButtonClick = async () => {
    // TODO: post an appointment on click with a correct slot number and all
    const postAppointment = async () => {
      const dateString = dateChoice.toISO({
        includeOffset: false,
        suppressMilliseconds: true
      });

      try {
        const response = await fetch('http://127.0.0.1:5000/appointments/add-appointment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          },
          body: JSON.stringify({
            service_id: highlightedService.id,
            date: dateString,
            time_slot: number
          })
        }
        )
        const result = await response.json();
        if (!response.ok) {
          console.log('Error posting the appointment');
          return;
        }

        console.log('Appointment booked successfully');
        return result;
      } catch (e) {
        console.log(`An error occured: ${e}`);
      }
      
    }
    toggleAppointmentPopup();
    postAppointment();
  }

  const printTimeSlot = () => {
    switch (number) {
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
      <h1
        className={`${classes.choiceButton} ${isActive ? null : classes.inactive}`}
        onClick={isActive ? handleChoiceButtonClick : undefined}
      >choose</h1>
    </div>
  )
}

export default TimeSlotCard