import React, {useEffect, useState} from 'react'
import UpcomingAppointmentCard from './UpcomingAppointmentCard'
import classes from './upcoming-appointmenst-list.module.css'

const API_URL   = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

const UpcomingAppointmentsList = () => {
    const [appointments, setAppointments] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const res = await fetch(`${API_URL}/appointments/get-appointments`, {
                    headers: { 'Authorization': `Bearer ${API_TOKEN}` }
                });
                if (!res.ok) throw new Error(`HTTP ${res.status}`)
                const data = await res.json()

                // teraz = teraz, odfiltrować tylko przyszłe
                const now = new Date()
                const upcoming = data
                    .map(a => ({
                        ...a,
                        dateObj: new Date(a.date)
                    }))
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

    if (loading) return <p>Loading upcoming appointments…</p>
    if (error)   return <p className={classes.error}>Error: {error}</p>

    if (appointments.length === 0) {
        return <p>No upcoming appointments.</p>
    }

    return (
        <div className={classes.appointmentsList}>
            <h1>Upcoming Appointments</h1>
            <ul>
                {appointments.map(({ id, service_name, dateObj, time_slot }) => (
                    <li key={id}>
                        <UpcomingAppointmentCard
                            service={service_name}
                            // sformatować datę, np. "2025-05-20, 14:00"
                            date={dateObj.toLocaleDateString('pl-PL', {
                                weekday: 'short',
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric'
                            }) + ', ' + dateObj.toLocaleTimeString('pl-PL', {
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                            timeSlot={time_slot}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UpcomingAppointmentsList
