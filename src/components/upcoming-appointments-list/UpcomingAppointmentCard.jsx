import React from 'react'
import classes from './upcoming-appointmenst-list.module.css'
import scissors from '../../assets/svg_images/service_icons/scissors.svg'

const UpcomingAppointmentCard = ({ service, date }) => (
    <div className={classes.cardContainer}>
        <header className={classes.serviceName}>{service}</header>
        <div className={classes.date}>{date}</div>
        <div className={classes.iconContainer}>
            <img src={scissors} alt="scissors icon" className={classes.icon} />
        </div>
    </div>
)

export default UpcomingAppointmentCard
