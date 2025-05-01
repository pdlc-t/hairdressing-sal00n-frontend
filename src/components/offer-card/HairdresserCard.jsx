import React from 'react';
import styles from './hairdresser-item-card.module.css';

const HairdresserCard = ({ hairdresser }) => {
    const { firstName, lastName, specialties, rating } = hairdresser;
    const stars = Array.from({ length: 5 }, (_, i) => i < rating);

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
            <p className={styles.ratingText}>Ocena: {rating}/5</p>
        </div>
    );
};

export default HairdresserCard;