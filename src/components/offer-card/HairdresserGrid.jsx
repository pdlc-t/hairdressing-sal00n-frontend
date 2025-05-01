import React from 'react';
import HairdresserCard from './HairdresserCard';
import hairdressers from '../../test_data/hairdressers.json';
import styles from './hairdresser-grid.module.css';

const HairdresserGrid = () => {
    return (
        <div className={styles.gridContainer}>
            {hairdressers.map((hd, idx) => (
                <HairdresserCard key={idx} hairdresser={hd} />
            ))}
        </div>
    );
};

export default HairdresserGrid;