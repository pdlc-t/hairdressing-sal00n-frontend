import React from 'react'
import classes from './past-appointmenst-list.module.css'
import scissors from '../../assets/svg_images/service_icons/scissors.svg'

const PastAppointmentCard = ({service, date}) => {
  return (
    <div className={`${classes.cardContainer}`}>
      <header className={`${classes.serviceName}`}>{service}</header>
      <header className={`${classes.date}`}>{date}</header>
      <div className={`${classes.iconContainer}`}>
        <img src={scissors} alt="scissors icon" className={`${classes.icon}`} />
      </div>
      <section className={`${classes.detailsButton}`}>details</section>
    </div>
  )
}

export default PastAppointmentCard
