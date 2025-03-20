import React, { useState } from 'react';
import Sal00nItemProductCard from "./Sal00nItemProductCard";
import Sal00nItemServiceCard from "./Sal00nItemServiceCard";
import ToggleSwitch from "../button-card/ToggleSwitch";
import products from '../../test_data/productsOffered.json';
import services from '../../test_data/servicesOffered.json';
import styles from './sal00n-item-grid-container.module.css';

const Sal00nItemGrid = () => {
    const [view, setView] = useState('services');

    return (
        <div className={styles.gridContainer}>
            <div className={styles.toggleContainer}>
                <ToggleSwitch activeView={view} setView={setView} />
            </div>
            <div className={styles.itemsContainer}>
                {view === 'products'
                    ? products.map((item, index) => (
                        <Sal00nItemProductCard key={index} item={item} />
                    ))
                    : services.map((item, index) => (
                        <Sal00nItemServiceCard key={index} item={item} />
                    ))}
            </div>
        </div>
    );
};

export default Sal00nItemGrid;