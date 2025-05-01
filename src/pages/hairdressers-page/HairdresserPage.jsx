import React from 'react';
import { Link } from 'react-router-dom';
import HairdresserGrid from '../../components/offer-card/HairdresserGrid';
import styles from './hairdresser-page.module.css';

const HairdresserPage = () => (
    <div className={styles.container}>
        <div className={styles.toolbar}>
            <h2 className={styles.title}>Nasi fryzjerzy:</h2>
            <Link to="/browse the offer" className={styles.offerBtn}>
                Zobacz ofertę
            </Link>
        </div>
        <HairdresserGrid />
    </div>
);

export default HairdresserPage;