import React from 'react'
import UpcomingAppointmentsList from '../../components/upcoming-appointments-list/UpcomingAppointmentsList'
import TilesGrid from '../../components/tiles-grid/TilesGrid'
import classes from './dashboard-page.module.css'

const DashboardPage = () => {
  return (
    <div className={`${classes.container}`}>
      <section className={`${classes.upcomingAppointments}`}>
        <UpcomingAppointmentsList />
      </section>
      <section className={`${classes.tilesGrid}`}>
        <TilesGrid />
      </section>
    </div>
  )
}

export default DashboardPage
