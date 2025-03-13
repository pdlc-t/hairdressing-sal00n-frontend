import React from 'react'
import classes from './history-page.module.css'
import PastAppointmentsList from '../../components/past-appointments-list/PastAppointmentsList'
// import TilesGrid from '../../components/tiles-grid/TilesGrid'

const HistoryPage = () => {
  return (
    <div className={`${classes.container}`}>
      <section className={`${classes.pastAppointments}`}>
        <PastAppointmentsList />
      </section>
      {/* <section className={`${classes.tilesGrid}`}>
        <TilesGrid />
      </section> */}
    </div>
  )
}

export default HistoryPage
