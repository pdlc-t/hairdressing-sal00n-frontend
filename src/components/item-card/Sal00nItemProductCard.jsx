import React, { useState } from 'react';
import styles from './sal00n-item-card.module.css';

const Sal00nItemProductCard = ({ item }) => {
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
                            <h3>{item.productName}</h3>
                            <p>Cena: {item.price} zł</p>
                            <p>Ilość: {item.amount} szt.</p>
                            <p>Producent: {item.producer}</p>
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

export default Sal00nItemProductCard;