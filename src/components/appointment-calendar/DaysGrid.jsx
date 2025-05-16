import React, { useEffect, useState, useContext } from 'react'
import CalendarDayTile from './CalendarDayTile'
import classes from './appointment-calendar.module.css'
import { DateTime, Interval } from 'luxon'
import { MakingAppointmentContext } from '../../pages/make-an-appointment-page/MakeAnAppointmentPage'
//import appointmentsData from '../../test_data/example_appointments.json';

// TODO: unplug test json file with appointments and fetch data from backend (uncomment necessary lines)

const DaysGrid = ({ firstDayOfActiveMonth }) => {
  // const [appointmentsData, setAppointmentsData] = useState([]);
  const { appointmentsData, refreshAppointments, appointmentsFetchingError } = useContext(MakingAppointmentContext);
  const today = DateTime.local();
  // const firstDayOfActiveMonth = today.startOf("month");
  const daysOfMonth = Interval.fromDateTimes(
    firstDayOfActiveMonth.startOf("week"),
    firstDayOfActiveMonth.endOf("month").endOf("week")
  ).splitBy({ day: 1 }).map(day => day.start);

  useEffect(() => {
    refreshAppointments();
  }, []);

  const determineAvailability = (day) => {
    const matchingAppointments = appointmentsData.filter((appointment) => {
      const appointmentDate = DateTime.fromISO(appointment.date).startOf('day');
      const targetDay = day.startOf('day');

      return appointmentDate.hasSame(targetDay, 'day');
    })
    if (matchingAppointments.length < 2) {
      return "green";
    } else if (matchingAppointments.length <= 4) {
      return "orange";
    } else {
      return "red"
    }
  }

  if (appointmentsFetchingError) return <h1>{appointmentsFetchingError}</h1>
  if (!appointmentsData.length) return <h1>Fetching days...</h1>
  

  return (
    <div className={`${classes.daysGrid}`}>
      {daysOfMonth.map((day, dayIndex) => (
        <CalendarDayTile
          key={dayIndex}
          date={day}
          isFromActiveMonth={day.month === firstDayOfActiveMonth.month}
          isToday={day.day === today.day && day.month === today.month && day.year === today.year}
          availability={determineAvailability(day)}
        />
      ))}
    </div>
  )
}

export default DaysGrid
