import React, { useEffect, useState } from 'react';
import Sal00nItemProductCard from "./Sal00nItemProductCard";
import Sal00nItemServiceCard from "./Sal00nItemServiceCard";
import styles from './sal00n-item-grid-container.module.css';

const API_URL   = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

const Sal00nItemGrid = ({ view }) => {
    const [items, setItems]     = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        const endpoint = view === 'products' ? 'products' : 'services';

        async function fetchItems() {
            try {
                const res = await fetch(`${API_URL}/${endpoint}/`, {
                    headers: {
                        'Authorization': `Bearer ${API_TOKEN}`
                    }
                });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setItems(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        }

        fetchItems();
    }, [view]);

    if (loading) return <p>Ładowanie danych…</p>;
    if (error)   return <p>Wystąpił błąd: {error}</p>;

    return (
        <div className={styles.gridContainer}>
            <div className={styles.itemsContainer}>
                {view === 'products'
                    ? items.map((item) => (
                        <Sal00nItemProductCard key={item.id} item={item} />
                    ))
                    : items.map((item) => (
                        <Sal00nItemServiceCard key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
};

export default Sal00nItemGrid;
