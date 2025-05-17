import React, { useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import classes from './make-an-appointment-page.module.css'
import { MakingAppointmentContext } from './MakeAnAppointmentPage'
import TimeSlotCard from './TimeSlotCard'

/*
  This is a remnant of how the tests of displaying occupied time slots were 
  made before the backend was worthy to face the task of delivering the data itself...
*/
// import slotsDataTest from '../../test_data/slots_activity_test.json'

const API_TOKEN = process.env.REACT_APP_API_TOKEN;

const AppointmentPopup = () => {
  const { highlightedService, toggleAppointmentPopup, dateChoice } = useContext(MakingAppointmentContext);
  const [slotsActivityData, setSlotsActivityData] = useState();

  useEffect(() => {
    const fetchAppointments = async () => {
      const dateString = dateChoice.toISO({
        includeOffset: false,
        suppressMilliseconds: true
      });

      console.log(dateString);

      try {
        const response = await fetch(`http://127.0.0.1:5000/appointments/get-busy-time-slots?date=${encodeURIComponent(dateString)}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          },
        });
        const data = await response.json();
        setSlotsActivityData(data);
      } catch (e) {
        console.log('Failed to fetch time slots data')
      }

    };

    fetchAppointments();
  }, [dateChoice])

  const determineActivity = (number) => {
    return slotsActivityData[number];
  }

  if (!highlightedService) {
    toggleAppointmentPopup();
    return;
  }

  return createPortal(
    <>
      <div className={`${classes.popupOverlay}`} onClick={toggleAppointmentPopup} />
      <div className={`${classes.appointmentPopup}`}>
        <div className={`${classes.appointmentPopupContent}`}>
          <div className={`${classes.popupHeader}`}>
            <h1>Choose Your time slot</h1>
            <h1>Service: {highlightedService.serviceName}</h1>
            <button className={`${classes.closeButton}`} onClick={toggleAppointmentPopup}>
              &times;
            </button>
          </div>
          {slotsActivityData ?
            <>
              <TimeSlotCard number={1} isActive={determineActivity(1)} />
              <TimeSlotCard number={2} isActive={determineActivity(2)} />
              <TimeSlotCard number={3} isActive={determineActivity(3)} />
              <TimeSlotCard number={4} isActive={determineActivity(4)} />
              <TimeSlotCard number={5} isActive={determineActivity(5)} />
            </> : <h1>Loading time slots information...</h1>
          }

        </div>
      </div>
    </>,
    document.body
  )
}

export default AppointmentPopup