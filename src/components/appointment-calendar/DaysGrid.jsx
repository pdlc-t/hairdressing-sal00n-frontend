import React, { useEffect, useState } from 'react'
import CalendarDayTile from './CalendarDayTile'
import classes from './appointment-calendar.module.css'
import { DateTime, Interval } from 'luxon'
//import appointmentsData from '../../test_data/example_appointments.json';

// TODO: unplug test json file with appointments and fetch data from backend (uncomment necessary lines)

const DaysGrid = ({ firstDayOfActiveMonth }) => {
  const [appointmentsData, setAppointmentsData] = useState([]);
  const [fetchingError, setFetchingError] = useState();
  const today = DateTime.local();
  // const firstDayOfActiveMonth = today.startOf("month");
  const daysOfMonth = Interval.fromDateTimes(
    firstDayOfActiveMonth.startOf("week"),
    firstDayOfActiveMonth.endOf("month").endOf("week")
  ).splitBy({ day: 1 }).map(day => day.start);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/appointments/get-appointments');
        const data = await response.json();

        setAppointmentsData(data);
      } catch (e) {
        console.log("error while fetching appointments: " + e)
        setFetchingError("An error occured when trying to fetch data from the server :(")
      }
    }

    fetchAppointments();
  }, [])

  useEffect(() => {
    console.log(appointmentsData);
  }, [appointmentsData])

  const determineAvailability = (day) => {
    const matchingAppointments = appointmentsData.filter((appointment) => {
      const appointmentDate = DateTime.fromISO(appointment.date).startOf('day');
      console.log(appointmentDate);
      const targetDay = day.startOf('day');

      return appointmentDate.hasSame(targetDay, 'day');
    })
    console.log(matchingAppointments.length)
    if (matchingAppointments.length < 2) {
      console.log("green")
      return "green";
    } else if (matchingAppointments.length <= 4) {
      console.log("orange")
      return "orange";
    } else {
      console.log("red")
      return "red"
    }
  }

  if (fetchingError) return <h1>{fetchingError}</h1>
  if (!appointmentsData.length) return <h1>Fetching days...</h1>
  

  return (
    <div className={`${classes.daysGrid}`}>
      {daysOfMonth.map((day, dayIndex) => (
        <CalendarDayTile
          key={dayIndex}
          day={day.day}
          isFromActiveMonth={day.month === firstDayOfActiveMonth.month}
          isToday={day.day === today.day && day.month === today.month && day.year === today.year}
          availability={determineAvailability(day)}
        />
      ))}
    </div>
  )
}

export default DaysGrid
