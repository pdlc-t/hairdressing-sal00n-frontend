import React, { useState } from 'react';
import styles from './sal00n-item-card.module.css';
import ReserveButton from "../button-card/ReserveButton";

const Sal00nItemServiceCard = ({ item }) => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
        setFlipped(!flipped);
    };

    return (
        <div
            className={`${styles.cardContainer} ${flipped ? styles.flipped : ''}`}
            onClick={handleCardClick}
            role="button"
            tabIndex={0}
        >
            <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                    {/* Front of the card */}
                    <div className={styles.flipCardFront}>
                        <div className={styles.cardContent}>
                            <h3>{item.serviceName}</h3>
                            <p>Cena: {item.price} zł</p>
                            <p>Czas trwania: {item.time} min.</p>
                            <p>Dostępność: {item.availability}</p>
                            <ReserveButton/>
                        </div>
                    </div>

                    {/* Back of the card */}
                    <div className={styles.flipCardBack}>
                        <div className={styles.cardContent}>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sal00nItemServiceCard;