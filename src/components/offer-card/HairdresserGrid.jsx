import React, { useState, useEffect } from 'react';
import HairdresserCard from './HairdresserCard';
import CommentsModal from './CommentsModal';
import styles from './hairdresser-grid.module.css';

const API_URL   = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export default function HairdresserGrid() {
    const [hairdressers, setHairdressers] = useState([]);
    const [selected, setSelected]         = useState(null);
    const [loading, setLoading]           = useState(true);
    const [error, setError]               = useState(null);

    useEffect(() => {
        async function fetchHairdressers() {
            try {
                const res = await fetch(`${API_URL}/hairdressers/`, {
                    headers: { 'Authorization': `Bearer ${API_TOKEN}` }
                });
                if (!res.ok) throw new Error(`Status ${res.status}`);
                setHairdressers(await res.json());
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
        <>
            <div className={styles.gridContainer}>
                {hairdressers.map(hd => (
                    <div key={hd.id} onClick={() => setSelected(hd.id)}>
                        <HairdresserCard hairdresser={hd} />
                    </div>
                ))}
            </div>
            {selected && (
                <CommentsModal
                    hairdresserId={selected}
                    onClose={() => setSelected(null)}
                />
            )}
        </>
    );
}
