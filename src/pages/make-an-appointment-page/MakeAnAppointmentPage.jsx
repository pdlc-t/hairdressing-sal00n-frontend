import React, { useState, createContext } from 'react'
import classes from './make-an-appointment-page.module.css'
import AppointmentCalendar from '../../components/appointment-calendar/AppointmentCalendar'
import ServicesList from '../../components/services-list/ServicesList'
import AppointmentPopup from './AppointmentPopup'

export const MakingAppointmentContext = createContext();

const MakeAnAppointmentPage = () => {
  const [highlightedService, setHighlightedService] = useState(undefined);
  const [isAppointmentPopup, setAppointmentPopup] = useState(false);
  const [dateChoice, setDateChoice] = useState(undefined);
  
  const [appointmentsData, setAppointmentsData] = useState([]);
  const [appointmentsFetchingError, setAppointmentsFetchingError] = useState(undefined)

  const refreshAppointments = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5000/appointments/get-appointments');
        const data = await response.json();

        setAppointmentsData(data);
      } catch (e) {
        console.log("error while fetching appointments: " + e)
        setAppointmentsFetchingError("An error occured when trying to fetch data from the server :(")
      }
  }


  const toggleAppointmentPopup = () => {
    setAppointmentPopup(!isAppointmentPopup);
  }

  return (
    <MakingAppointmentContext.Provider value={{ 
      highlightedService, setHighlightedService, toggleAppointmentPopup, 
      dateChoice, setDateChoice, appointmentsData, refreshAppointments,
      appointmentsFetchingError
    }}>
      {isAppointmentPopup ? <AppointmentPopup /> : null}
      <div className={`${classes.main}`}>
        <div className={`${classes.serviceSelectContainer}`}>
          <ServicesList />
        </div>
        <div className={`${classes.calendarContainer}`}>
          <AppointmentCalendar />
        </div>
      </div>
    </MakingAppointmentContext.Provider>
  )
}

export default MakeAnAppointmentPage
