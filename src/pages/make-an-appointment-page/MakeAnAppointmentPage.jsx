import React, { useState, createContext } from 'react'
import classes from './make-an-appointment-page.module.css'
import AppointmentCalendar from '../../components/appointment-calendar/AppointmentCalendar'
import ServicesList from '../../components/services-list/ServicesList'
import AppointmentPopup from './AppointmentPopup'

const API_URL   = process.env.REACT_APP_API_URL;
//const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export const MakingAppointmentContext = createContext();

const MakeAnAppointmentPage = () => {
  const [highlightedService, setHighlightedService] = useState(undefined);
  const [isAppointmentPopup, setAppointmentPopup] = useState(false);
  const [dateChoice, setDateChoice] = useState(undefined);
  
  const [appointmentsData, setAppointmentsData] = useState([]);
  const [appointmentsFetchingError, setAppointmentsFetchingError] = useState(undefined)

  // MakeAnAppointmentPage.jsx (lub tam, gdzie definiujesz refreshAppointments)
  const refreshAppointments = async () => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      setAppointmentsFetchingError('Brak tokena — zaloguj się')
      return
    }
    try {
      const res = await fetch(
          `${API_URL}/appointments/get-appointments`,
          {
            headers: { 'Authorization': `Bearer ${token}` }
          }
      )
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setAppointmentsData(data)
    } catch (e) {
      setAppointmentsFetchingError(e.message)
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
