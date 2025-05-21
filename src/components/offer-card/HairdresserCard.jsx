// src/components/hairdresser-grid/HairdresserCard.jsx
import React from 'react'
import styles from './hairdresser-item-card.module.css'

const HairdresserCard = ({ hairdresser }) => {
    const { firstName, lastName, specialties, rating } = hairdresser

    // rating może być null lub undefined
    const filledCount = typeof rating === 'number' ? rating : 0
    const stars = Array.from({ length: 5 }, (_, i) => i < filledCount)

    return (
        <div className={styles.cardContainer}>
            <h3 className={styles.name}>{firstName} {lastName}</h3>
            <ul className={styles.specialtiesList}>
                {specialties.map((spec, idx) => (
                    <li key={idx}>{spec}</li>
                ))}
            </ul>
            <div className={styles.starsContainer}>
                {stars.map((filled, idx) => (
                    <span
                        key={idx}
                        className={`${styles.star} ${filled ? styles.filled : ''}`}
                    >
            ★
          </span>
                ))}
            </div>
            <p className={styles.ratingText}>Ocena: {filledCount}/5</p>
        </div>
    )
}

export default HairdresserCard
