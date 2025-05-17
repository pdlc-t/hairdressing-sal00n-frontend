// src/components/appointment-calendar/DaysGrid.jsx
import React, { useEffect, useState } from 'react'
import CalendarDayTile from './CalendarDayTile'
import classes from './appointment-calendar.module.css'
import { DateTime, Interval } from 'luxon'

// Adres API z .env
const API_URL = process.env.REACT_APP_API_URL

const DaysGrid = ({ firstDayOfActiveMonth }) => {
    const [appointments, setAppointments] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const today = DateTime.local()

    // Generujemy zakres dni obejmujący cały widok kalendarza
    const daysOfMonth = Interval
        .fromDateTimes(
            firstDayOfActiveMonth.startOf('week'),
            firstDayOfActiveMonth.endOf('month').endOf('week')
        )
        .splitBy({ day: 1 })
        .map(interval => interval.start)

    useEffect(() => {
        const fetchAppointments = async () => {
            setLoading(true)
            setError(null)

            const token = localStorage.getItem('authToken')
            if (!token) {
                setError('Brak tokena autoryzacyjnego')
                setLoading(false)
                return
            }

            try {
                const res = await fetch(
                    `${API_URL}/appointments/get-appointments`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                )

                if (res.status === 401) {
                    throw new Error('Nieautoryzowany. Zaloguj się ponownie.')
                }
                if (!res.ok) {
                    throw new Error(`Błąd sieci: HTTP ${res.status}`)
                }

                const data = await res.json()
                setAppointments(data)
            } catch (e) {
                console.error('Error while fetching appointments:', e)
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }

        fetchAppointments()
    }, [firstDayOfActiveMonth])

    const determineAvailability = (day) => {
        const target = day.startOf('day')
        const count = appointments.filter(appt => {
            const apptDay = DateTime.fromISO(appt.date).startOf('day')
            return apptDay.hasSame(target, 'day')
        }).length

        if (count < 2) return 'green'
        if (count <= 4) return 'orange'
        return 'red'
    }

    if (loading) {
        return <h1>Ładowanie danych o wizytach…</h1>
    }
    if (error) {
        return <h1 className={classes.error}>Błąd: {error}</h1>
    }

    return (
        <div className={classes.daysGrid}>
            {daysOfMonth.map((day, idx) => (
                <CalendarDayTile
                    key={idx}
                    date={day}
                    isFromActiveMonth={day.month === firstDayOfActiveMonth.month}
                    isToday={
                        day.day === today.day &&
                        day.month === today.month &&
                        day.year === today.year
                    }
                    availability={determineAvailability(day)}
                />
            ))}
        </div>
    )
}

export default DaysGrid
