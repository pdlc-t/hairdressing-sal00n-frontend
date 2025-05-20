// src/components/past-appointments-list/PastAppointmentsList.jsx

import React, { useEffect, useState } from 'react'
import PastAppointmentCard from './PastAppointmentCard'
import classes from './past-appointmenst-list.module.css'

const API_URL = process.env.REACT_APP_API_URL

const PastAppointmentsList = () => {
    const [appointments, setAppointments] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchAppointments = async () => {
            setLoading(true)
            setError(null)
            try {
                const token = localStorage.getItem('authToken')
                if (!token) throw new Error('Brak tokena autoryzacyjnego')

                const res = await fetch(
                    `${API_URL}/appointments/get-clients-appointments`,
                    { headers: { 'Authorization': `Bearer ${token}` } }
                )
                if (!res.ok) throw new Error(`HTTP ${res.status}`)
                const data = await res.json()

                const now = new Date()
                const past = data
                    .map(a => ({ ...a, dateObj: new Date(a.date) }))
                    .filter(a => a.dateObj < now)
                    .sort((a, b) => b.dateObj - a.dateObj)  // najpierw te najnowsze

                setAppointments(past)
            } catch (e) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }

        fetchAppointments()
    }, [])

    if (loading) return <p>Ładowanie historii wizyt…</p>
    if (error)   return <p className={classes.error}>Błąd: {error}</p>
    if (appointments.length === 0) {
        return <p>Brak zakończonych wizyt.</p>
    }

    return (
        <div className={classes.appointmentsList}>
            <h1>Past Appointments</h1>
            <ul>
                {appointments.map(({ id, service_name, hairdresser, dateObj }) => {
                    const dateStr = dateObj.toLocaleDateString('pl-PL', {
                        weekday: 'long',
                        year:    'numeric',
                        month:   'numeric',
                        day:     'numeric'
                    })
                    const timeStr = dateObj.toLocaleTimeString('pl-PL', {
                        hour:   '2-digit',
                        minute: '2-digit'
                    })
                    const hdName = `${hairdresser.firstName} ${hairdresser.lastName}`

                    return (
                        <li key={id}>
                            <PastAppointmentCard
                                appointmentId={id}
                                service={service_name}
                                date={`${dateStr}, ${timeStr}`}
                                hairdresserId={hairdresser.id}
                                hairdresserName={hdName}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PastAppointmentsList
