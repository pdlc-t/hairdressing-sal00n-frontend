import React, { useContext } from 'react'
import { createPortal } from 'react-dom'
import classes from './make-an-appointment-page.module.css'
import { MakingAppointmentContext } from './MakeAnAppointmentPage'
import TimeSlotCard from './TimeSlotCard'

const AppointmentPopup = () => {
  const { highlightedService, toggleAppointmentPopup } = useContext(MakingAppointmentContext);

  return createPortal(
    <>
      <div className={`${classes.popupOverlay}`} onClick={toggleAppointmentPopup} />
      <div className={`${classes.appointmentPopup}`}>
        <div className={`${classes.appointmentPopupContent}`}>
          <div className={`${classes.popupHeader}`}>
            <h1>Choose Your time slot</h1>
            <h1>Service: {highlightedService.name}</h1>
            <button className={`${classes.closeButton}`} onClick={toggleAppointmentPopup}>
              &times;
            </button>
          </div>
          <TimeSlotCard number={1} />
          <TimeSlotCard number={2} />
          <TimeSlotCard number={3} />
          <TimeSlotCard number={4} />
          <TimeSlotCard number={5} />
        </div>
      </div>
    </>,
    document.body
  )
}

export default AppointmentPopup