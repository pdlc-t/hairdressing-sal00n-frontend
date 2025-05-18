// src/components/button-card/ReserveButton.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './reserve-button.module.css'

const ReserveButton = ({ service }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/make an appointment', { state: { service } })
    }

    return (
        <button className="reserve-button" onClick={handleClick}>
            Zarezerwuj
        </button>
    )
}

export default ReserveButton
