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
                                 hairdresserName
                             }) => {
    const [rating, setRating]             = useState(0)
    const [showForm, setShowForm]         = useState(false)
    const [commentText, setCommentText]   = useState('')
    const [sending, setSending]           = useState(false)
    const [commentSent, setCommentSent]   = useState(false)  // <- NEW

    const token = localStorage.getItem('authToken') || API_TOKEN

    const handleRating = async newRating => {
        setRating(newRating)
        try {
            await fetch(`${API_URL}/hairdressers/${hairdresserId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ rating: newRating })
            })
        } catch (e) {
            console.error('Błąd aktualizacji oceny:', e)
            alert('Błąd przy zapisywaniu oceny')
        }
    }

    const openForm = () => {
        setCommentText('')
        setShowForm(true)
    }

    const closeForm = () => {
        setCommentText('')
        setShowForm(false)
    }

    const sendComment = async () => {
        if (!commentText.trim()) {
            alert('Komentarz nie może być pusty')
            return
        }

        const username = localStorage.getItem('username') || 'Anonymous'

        setSending(true)
        try {
            const res = await fetch(`${API_URL}/hairdressers/${hairdresserId}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    content: commentText,
                    author: username
                })
            })

            if (!res.ok) {
                const err = await res.json()
                throw new Error(err.description || `HTTP ${res.status}`)
            }

            alert('Komentarz dodany pomyślnie')
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
                    onClick={() => handleRating(i + 1)}
                >
          ★
        </span>
            ))}
        </div>
    )

    return (
        <div className={classes.cardContainer}>
            <header className={classes.serviceName}>{service}</header>
            <div className={classes.hairdresser}>
                <img src={scissors} alt="" className={classes.icon} />
                <span>{hairdresserName}</span>
            </div>
            <div className={classes.date}>{date}</div>

            <div className={classes.controls}>
                {renderStars()}
                {!showForm && (
                    <button
                        className={classes.commentButton}
                        onClick={openForm}
                        disabled={commentSent}  // <- disable if already sent
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
