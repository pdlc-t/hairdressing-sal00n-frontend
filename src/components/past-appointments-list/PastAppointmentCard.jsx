// src/components/past-appointments-list/PastAppointmentCard.jsx

import React, { useState } from 'react'
import classes from './past-appointmenst-list.module.css'
import scissors from '../../assets/svg_images/service_icons/scissors.svg'

const API_URL   = process.env.REACT_APP_API_URL
const API_TOKEN = process.env.REACT_APP_API_TOKEN

const PastAppointmentCard = ({
                                 appointmentId,
                                 service,
                                 date,
                                 hairdresserId,
                                 hairdresserName,
                                 price
                             }) => {
    // Jeżeli w localStorage jest zapisany rating, weź go, inaczej 0
    const [rating, setRating] = useState(() => {
        const saved = localStorage.getItem(`rating_${appointmentId}`)
        return saved ? Number(saved) : 0
    })

    // Flaga: czy już oceniono tę wizytę?
    const [rated, setRated] = useState(() => {
        return localStorage.getItem(`rated_${appointmentId}`) === 'true'
    })

    const [showForm, setShowForm]       = useState(false)
    const [commentText, setCommentText] = useState('')
    const [sending, setSending]         = useState(false)
    // Flaga: czy już wysłano komentarz?
    const [commentSent, setCommentSent] = useState(() => {
        return localStorage.getItem(`commentSent_${appointmentId}`) === 'true'
    })

    const token = localStorage.getItem('authToken') || API_TOKEN

    const handleRating = async newRating => {
        if (rated) return
        try {
            const res = await fetch(
                `${API_URL}/appointments/${appointmentId}/rate`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ rating: newRating })
                }
            )
            if (!res.ok) throw new Error(`HTTP ${res.status}`)
            // Zapisz nową ocenę w stanie i w localStorage:
            setRating(newRating)
            setRated(true)
            localStorage.setItem(`rated_${appointmentId}`, 'true')
            localStorage.setItem(`rating_${appointmentId}`, String(newRating))
        } catch (e) {
            console.error('Błąd przy ocenianiu:', e)
            alert('Nie udało się zapisać oceny')
        }
    }

    const openForm  = () => { setCommentText(''); setShowForm(true) }
    const closeForm = () => { setCommentText(''); setShowForm(false) }

    const sendComment = async () => {
        if (!commentText.trim()) {
            alert('Komentarz nie może być pusty')
            return
        }
        setSending(true)
        try {
            const username = localStorage.getItem('username') || 'Anonymous'
            const res = await fetch(
                `${API_URL}/hairdressers/${hairdresserId}/comments`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        content: commentText,
                        author: username
                    })
                }
            )
            if (!res.ok) {
                const err = await res.json().catch(() => ({}))
                throw new Error(err.description || `HTTP ${res.status}`)
            }
            alert('Komentarz dodany pomyślnie')
            localStorage.setItem(`commentSent_${appointmentId}`, 'true')
            setCommentSent(true)
            closeForm()
        } catch (e) {
            console.error('Błąd dodawania komentarza:', e)
            alert('Nie udało się dodać komentarza')
        } finally {
            setSending(false)
        }
    }

    const renderStars = () => (
        <div className={classes.stars}>
            {[...Array(5)].map((_, i) => (
                <span
                    key={i}
                    className={i < rating ? classes.filledStar : classes.emptyStar}
                    onClick={() => rated ? null : handleRating(i + 1)}
                    style={{ cursor: rated ? 'not-allowed' : 'pointer' }}
                >
          ★
        </span>
            ))}
        </div>
    )

    return (
        <div className={classes.cardContainer}>
            <header className={classes.serviceName}>{service}</header>
            {/* nowy wiersz z ceną */}
            <div className={classes.price}>Zapłacono: {price} zł</div>

            <div className={classes.hairdresser}>
                <img src={scissors} alt="" className={classes.icon}/>
                <span>{hairdresserName}</span>
            </div>

            <div className={classes.date}>{date}</div>
            <p> Rate hairdresser:</p>
            <div className={classes.controls}>
                {renderStars()}
                {!showForm && (
                    <button
                        className={classes.commentButton}
                        onClick={openForm}
                        disabled={commentSent}
                        style={{
                            opacity: commentSent ? 0.5 : 1,
                            cursor: commentSent ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {commentSent ? 'Comment Sent' : 'Add Comment'}
                    </button>
                )}
            </div>

            {showForm && (
                <div className={classes.commentForm}>
          <textarea
              className={classes.textarea}
              value={commentText}
              onChange={e => setCommentText(e.target.value)}
              placeholder="Twój komentarz..."
              rows={3}
              disabled={sending}
          />
                    <div className={classes.formButtons}>
                        <button
                            className={classes.sendButton}
                            onClick={sendComment}
                            disabled={sending}
                        >
                            {sending ? 'Wysyłanie…' : 'Wyślij'}
                        </button>
                        <button
                            className={classes.cancelButton}
                            onClick={closeForm}
                            disabled={sending}
                        >
                            Anuluj
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PastAppointmentCard
