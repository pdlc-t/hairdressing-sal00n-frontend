import React, { useEffect, useState } from 'react';
import HairdresserCard from './HairdresserCard';
import styles from './hairdresser-grid.module.css';

const API_URL   = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

const HairdresserGrid = () => {
    const [hairdressers, setHairdressers] = useState([]);
    const [loading, setLoading]           = useState(true);
    const [error, setError]               = useState(null);

    useEffect(() => {
        async function fetchHairdressers() {
            try {
                const res = await fetch(`${API_URL}/hairdressers/`, {
                    headers: {
                        'Authorization': `Bearer ${API_TOKEN}`
                    }
                });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setHairdressers(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        }
        fetchHairdressers();
    }, []);

    if (loading) return <p>Ładowanie fryzjerów…</p>;
    if (error)   return <p>Wystąpił błąd: {error}</p>;

    return (
        <div className={styles.gridContainer}>
            {hairdressers.map((hd) => (
                <HairdresserCard key={hd.id} hairdresser={hd} />
            ))}
        </div>
    );
};

export default HairdresserGrid;
