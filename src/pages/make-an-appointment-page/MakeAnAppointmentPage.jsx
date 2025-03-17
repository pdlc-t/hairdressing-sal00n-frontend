import React, { useState, createContext } from 'react'
import classes from './make-an-appointment-page.module.css'
import AppointmentCalendar from '../../components/appointment-calendar/AppointmentCalendar'
import ServicesList from '../../components/services-list/ServicesList'

export const ServiceChoiceContext = createContext();

const MakeAnAppointmentPage = () => {
  const [highlightedService, setHighlightedService] = useState();

  return (
    <ServiceChoiceContext.Provider value={{ highlightedService, setHighlightedService }}>
      <div className={`${classes.main}`}>
        <div className={`${classes.serviceSelectContainer}`}>
          <ServicesList />
        </div>
        <div className={`${classes.calendarContainer}`}>
          <AppointmentCalendar />
        </div>
      </div>
    </ServiceChoiceContext.Provider>
  )
}

export default MakeAnAppointmentPage
