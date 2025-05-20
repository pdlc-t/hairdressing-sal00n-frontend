// src/components/upcoming-appointments-list/UpcomingAppointmentsList.jsx
import React, { useEffect, useState } from 'react'
import UpcomingAppointmentCard from './UpcomingAppointmentCard'
import classes from './upcoming-appointmenst-list.module.css'

const API_URL = process.env.REACT_APP_API_URL

const UpcomingAppointmentsList = () => {
    const [appointments, setAppointments] = useState([])
    const [loading, setLoading]       = useState(true)
    const [error, setError]           = useState(null)

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
                const upcoming = data
                    .map(a => ({ ...a, dateObj: new Date(a.date) }))
                    .filter(a => a.dateObj > now)
                    .sort((a, b) => a.dateObj - b.dateObj)

                setAppointments(upcoming)
            } catch (e) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }

        fetchAppointments()
    }, [])

    const handleCancel = cancelledId => {
        setAppointments(prev => prev.filter(a => a.id !== cancelledId))
    }

    if (loading) return <p>Loading upcoming appointments…</p>
    if (error)   return <p className={classes.error}>Error: {error}</p>
    if (appointments.length === 0) {
        return <p>No upcoming appointments.</p>
    }

    return (
        <div className={classes.appointmentsList}>
            <h1>Upcoming Appointments</h1>
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
                    const hairdresserName = `${hairdresser.firstName} ${hairdresser.lastName}`

                    return (
                        <li key={id}>
                            <UpcomingAppointmentCard
                                id={id}
                                service={service_name}
                                hairdresser={hairdresserName}
                                date={`${dateStr}, ${timeStr}`}
                                onCancel={handleCancel}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default UpcomingAppointmentsList
