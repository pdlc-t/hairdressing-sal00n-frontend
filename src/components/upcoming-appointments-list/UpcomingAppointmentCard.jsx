import React, {useState} from 'react'
import classes from './upcoming-appointmenst-list.module.css'
import scissors from '../../assets/svg_images/service_icons/scissors.svg'


const API_URL = process.env.REACT_APP_API_URL

const UpcomingAppointmentCard = ({ id, service, date, onCancel }) => {
    const [deleting, setDeleting] = useState(false)
    const token = localStorage.getItem('authToken')

    const handleCancel = async () => {
        if (!window.confirm('Na pewno chcesz odwołać tę wizytę?')) return

        setDeleting(true)
        try {
            const res = await fetch(
                `${API_URL}/appointments/${id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            if (!res.ok) {
                const err = await res.json()
                alert('Anulowanie nie powiodło się: ' + (err.error || res.status))
            } else {
                // sukces → natychmiast usuwamy kafelek
                onCancel(id)
            }
        } catch (e) {
            console.error(e)
            alert('Wystąpił nieoczekiwany błąd')
        } finally {
            setDeleting(false)
        }
    }

    return (
        <div className={classes.cardContainer}>
            <header className={classes.serviceName}>{service}</header>
            <div className={classes.date}>{date}</div>
            <div className={classes.iconContainer}>
                <img src={scissors} alt="scissors icon" className={classes.icon} />
            </div>
            <button
                className={classes.cancelButton}
                onClick={handleCancel}
                disabled={deleting}
            >
                {deleting ? 'Anulowanie…' : 'Cancel'}
            </button>
        </div>
    )
}

export default UpcomingAppointmentCard