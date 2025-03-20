import React from 'react';
import { useNavigate } from 'react-router-dom';
import './reserve-button.module.css'

const ReserveButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/make%20an%20appointment');
    };

    return (
        <button className="reserve-button" onClick={handleClick}>
            Zarezerwuj
        </button>
    );
};

export default ReserveButton;
