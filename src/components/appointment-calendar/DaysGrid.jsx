// src/components/appointment-calendar/DaysGrid.jsx
import React, { useEffect, useContext } from 'react'
import CalendarDayTile from './CalendarDayTile'
import classes from './appointment-calendar.module.css'
import { DateTime, Interval } from 'luxon'
import {MakingAppointmentContext} from "../../context/MakingAppointmentProvider";

const DaysGrid = ({ firstDayOfActiveMonth }) => {
    const {
        appointmentsData,
        refreshAppointments,
        appointmentsFetchingError
    } = useContext(MakingAppointmentContext)

    const today = DateTime.local()

    // Generujemy zakres dni obejmujący cały widok kalendarza
    const daysOfMonth = Interval
        .fromDateTimes(
            firstDayOfActiveMonth.startOf('week'),
            firstDayOfActiveMonth.endOf('month').endOf('week')
        )
        .splitBy({ day: 1 })
        .map(interval => interval.start)

    // Przy pierwszym renderze pobieramy wizyty
    useEffect(() => {
        refreshAppointments()
    }, [])

    // Funkcja zwracająca kolor wg liczby wizyt w danym dniu
    const determineAvailability = day => {
        if (!appointmentsData) return 'green'
        const target = day.startOf('day')
        const count = appointmentsData.filter(appt => {
            const apptDay = DateTime.fromISO(appt.date).startOf('day')
            return apptDay.hasSame(target, 'day')
        }).length

        if (count < 2) return 'green'
        if (count <= 4) return 'orange'
        return 'red'
    }

    // Obsługa stanów: błąd, ładowanie
    if (appointmentsFetchingError) {
        return <h1 className={classes.error}>Błąd: {appointmentsFetchingError}</h1>
    }
    if (!appointmentsData || appointmentsData.length === 0) {
        return <h1>Ładowanie wizyt…</h1>
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
