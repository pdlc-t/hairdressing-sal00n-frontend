import React, { useState, createContext } from 'react'
import AppointmentPopup from '../pages/make-an-appointment-page/AppointmentPopup'

export const MakingAppointmentContext = createContext()

export const MakingAppointmentProvider = ({ children }) => {
    const API_URL = process.env.REACT_APP_API_URL

    const [highlightedService, setHighlightedService] = useState()
    const [isAppointmentPopup, setAppointmentPopup]   = useState(false)
    const [dateChoice, setDateChoice]                 = useState()

    const [appointmentsData, setAppointmentsData]         = useState([])
    const [appointmentsFetchingError, setAppointmentsFetchingError] = useState()

    const refreshAppointments = async () => {
        const token = localStorage.getItem('authToken')
        if (!token) {
            setAppointmentsFetchingError('Brak tokena — zaloguj się')
            return
        }
        try {
            const res = await fetch(
                `${API_URL}/appointments/get-appointments`,
                { headers: { 'Authorization': `Bearer ${token}` } }
            )
            if (!res.ok) throw new Error(`HTTP ${res.status}`)
            const data = await res.json()
            setAppointmentsData(data)
        } catch (e) {
            setAppointmentsFetchingError(e.message)
        }
    }

    const toggleAppointmentPopup = () => {
        setAppointmentPopup(v => !v)
    }

    return (
        <MakingAppointmentContext.Provider value={{
            highlightedService,
            setHighlightedService,
            toggleAppointmentPopup,
            dateChoice,
            setDateChoice,
            appointmentsData,
            refreshAppointments,
            appointmentsFetchingError,
            setAppointmentsData
        }}>
            {isAppointmentPopup && <AppointmentPopup />}
            {children}
        </MakingAppointmentContext.Provider>
    )
}