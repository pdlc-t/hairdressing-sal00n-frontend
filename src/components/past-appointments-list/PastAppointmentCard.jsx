import React, { useState } from 'react'
import classes from './past-appointmenst-list.module.css'
import scissors from '../../assets/svg_images/service_icons/scissors.svg'

const PastAppointmentCard = ({ service, date, rating }) => {
  const [currentRating, setCurrentRating] = useState(rating)

  const handleRatingClick = (newRating) => {
    setCurrentRating(newRating)
    // Możesz dodać tutaj wywołanie zapisu do backendu, np.:
    // saveRating(serviceId, newRating)
  }

  const renderStars = () => {
    const totalStars = 5
    return (
      <div className={classes.stars}>
        {[...Array(totalStars)].map((_, i) => (
          <span
            key={i}
            className={i < currentRating ? classes.filledStar : classes.emptyStar}
            onClick={() => handleRatingClick(i + 1)}
            style={{ cursor: 'pointer' }}
          >
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className={classes.cardContainer}>
      <header className={classes.serviceName}>{service}</header>
      <header className={classes.date}>{date}</header>
      <div className={classes.iconContainer}>
        <img src={scissors} alt="scissors icon" className={classes.icon} />
      </div>
      {renderStars()}
      <section className={classes.detailsButton}>details</section>
    </div>
  )
}

export default PastAppointmentCard
