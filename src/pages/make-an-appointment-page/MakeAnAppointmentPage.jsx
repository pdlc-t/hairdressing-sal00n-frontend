// src/pages/make-an-appointment-page/MakeAnAppointmentPage.jsx

import React, { useContext } from 'react'
import classes from './make-an-appointment-page.module.css'
import AppointmentCalendar from '../../components/appointment-calendar/AppointmentCalendar'
import ServicesList from '../../components/services-list/ServicesList'
import AppointmentPopup from './AppointmentPopup'
import { MakingAppointmentContext } from '../../context/MakingAppointmentProvider'

const MakeAnAppointmentPage = () => {
  const {
    highlightedService,
    setHighlightedService,
    isAppointmentPopup,
    toggleAppointmentPopup,
    dateChoice,
    setDateChoice,
    appointmentsData,
    refreshAppointments,
    appointmentsFetchingError
  } = useContext(MakingAppointmentContext)

  return (
      <>
        {/* Jeśli popup ma być widoczny */}
        {isAppointmentPopup && <AppointmentPopup />}

        <div className={classes.main}>
          <div className={classes.serviceSelectContainer}>
            <ServicesList
                highlightedService={highlightedService}
                setHighlightedService={setHighlightedService}
            />
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
