import React, { useEffect, useState } from 'react';
import styles from './comments-modal.module.css';

const API_URL   = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export default function CommentsModal({ hairdresserId, onClose }) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading]   = useState(true);
    const [error, setError]       = useState(null);

    useEffect(() => {
        async function fetchComments() {
            try {
                const res = await fetch(`${API_URL}/hairdressers/${hairdresserId}/comments`, {
                    headers: { 'Authorization': `Bearer ${API_TOKEN}` }
                });
                if (!res.ok) throw new Error(`Status ${res.status}`);
                setComments(await res.json());
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        }
        fetchComments();
    }, [hairdresserId]);

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={onClose}>×</button>
                <h3 style={{textAlign: 'center'}}>Komentarze:</h3>
                {loading && <p>Ładowanie…</p>}
                {error && <p className={styles.error}>Błąd: {error}</p>}
                {!loading && !error && (
                    <ul className={styles.list}>
                        {comments.length === 0
                            ? <li>Brak komentarzy.</li>
                            : comments.map(c => (
                                <li key={c.id}>
                                    <strong>{c.author || 'Anonim'}</strong>:
                                    <p>{c.content}</p>
                                    <small>{new Date(c.created_at).toLocaleString()}</small>
                                </li>
                            ))
                        }
                    </ul>
                )}
            </div>
        </div>
    );
}
