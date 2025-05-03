import React, { useState, createContext } from 'react'
import classes from './make-an-appointment-page.module.css'
import AppointmentCalendar from '../../components/appointment-calendar/AppointmentCalendar'
import ServicesList from '../../components/services-list/ServicesList'
import AppointmentPopup from './AppointmentPopup'

export const MakingAppointmentContext = createContext();

const MakeAnAppointmentPage = () => {
  const [highlightedService, setHighlightedService] = useState(undefined);
  const [isAppointmentPopup, setAppointmentPopup] = useState(false)

  const toggleAppointmentPopup = () => {
    setAppointmentPopup(!isAppointmentPopup);
  }

  return (
    <MakingAppointmentContext.Provider value={{ highlightedService, setHighlightedService, toggleAppointmentPopup }}>
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
