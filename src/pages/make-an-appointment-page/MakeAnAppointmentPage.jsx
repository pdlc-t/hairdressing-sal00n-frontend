// src/pages/make-an-appointment-page/MakeAnAppointmentPage.jsx

import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import classes from './make-an-appointment-page.module.css'
import AppointmentCalendar from '../../components/appointment-calendar/AppointmentCalendar'
import ServicesList from '../../components/services-list/ServicesList'
import AppointmentPopup from './AppointmentPopup'
import { MakingAppointmentContext } from '../../context/MakingAppointmentProvider'

const MakeAnAppointmentPage = () => {
  const { setHighlightedService, isAppointmentPopup, toggleAppointmentPopup, dateChoice,
    setDateChoice, appointmentsData, refreshAppointments, appointmentsFetchingError } =
      useContext(MakingAppointmentContext)

  const { state } = useLocation()

  useEffect(() => {
    if (state?.service) {
      // state.service pochodzi z BrowseOffer i ma poprawne `id`
      setHighlightedService(state.service)
    }
  }, [state, setHighlightedService])

  return (
      <>
        {isAppointmentPopup && <AppointmentPopup />}

        <div className={classes.main}>
          <div className={classes.serviceSelectContainer}>
            <ServicesList />
          </div>
          <div className={classes.calendarContainer}>
            <AppointmentCalendar
                dateChoice={dateChoice}
                setDateChoice={setDateChoice}
                appointmentsData={appointmentsData}
                refreshAppointments={refreshAppointments}
                appointmentsFetchingError={appointmentsFetchingError}
                toggleAppointmentPopup={toggleAppointmentPopup}
            />
          </div>
        </div>
      </>
  )
}

export default MakeAnAppointmentPage
