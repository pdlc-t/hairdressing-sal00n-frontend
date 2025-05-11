import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './landing-page.module.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Welcome to Hairdressing Sal00n</h1>
      <p className={classes.subtitle}>Your one-stop solution for all your hairdressing needs!</p>
      <button className={classes.button} onClick={handleLoginRedirect}>
        Login
      </button>
      <p className={classes.registerText}>
        Don't have an account? <span onClick={() => navigate('/register')} className={classes.registerLink}>Register here</span>
      </p>
    </div>
  );
};

export default LandingPage;