import React from 'react';
import { useNavigate } from 'react-router-dom';
import user from '../../assets/svg_images/other_icons/user.svg';
import classes from './head-bar.module.css';

const AccountButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data (e.g., token)
    localStorage.removeItem('authToken'); // Remove the token from localStorage
    navigate('/landing'); // Redirect to the landing page
  };

  return (
    <div className={classes.accountButton} onClick={handleLogout}>
      <h2>Logout</h2>
      <img src={user} alt="user icon" />
    </div>
  );
};

export default AccountButton;