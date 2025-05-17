import React, { useContext } from 'react'
import classes from './make-an-appointment-page.module.css'
import { MakingAppointmentContext } from './MakeAnAppointmentPage'

const API_URL = process.env.REACT_APP_API_URL

const TimeSlotCard = ({ number, isActive }) => {
    const {
        dateChoice,
        highlightedService,
        toggleAppointmentPopup,
        refreshAppointments
    } = useContext(MakingAppointmentContext)

    const handleChoiceButtonClick = async () => {
        const token = localStorage.getItem('authToken')
        if (!token) {
            console.error('No auth token found')
            return
        }

        const dateString = dateChoice.toISO({
            includeOffset: false,
            suppressMilliseconds: true
        })

        try {
            const response = await fetch(
                `${API_URL}/appointments/add-appointment`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        service_id: highlightedService.id,
                        date: dateString,
                        time_slot: number
                    })
                }
            )

            const result = await response.json()
            if (!response.ok) {
                console.error('Error posting the appointment:', result)
                return
            }

            console.log('Appointment booked successfully')
            // Dopiero po udanym POST:
            toggleAppointmentPopup()
            refreshAppointments()
            return result

        } catch (e) {
            console.error(`An error occurred: ${e}`)
        }
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
                return null
        }
    }

    return (
        <div className={classes.timeSlotCard}>
            {printTimeSlot()}
            <h1
                className={`${classes.choiceButton} ${isActive ? '' : classes.inactive}`}
                onClick={isActive ? handleChoiceButtonClick : undefined}
            >
                choose
            </h1>
        </div>
    )
}

export default TimeSlotCard
