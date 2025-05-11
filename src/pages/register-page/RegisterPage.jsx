import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './register-page.module.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log('Registration successful:', data);

      // Assuming the backend returns a token upon successful registration
      localStorage.setItem('authToken', data.token); // Save the token in localStorage
      navigate('/home'); // Redirect to home page after registration
    } catch (err) {
      setError(err.message || 'An error occurred');
    }
  };

  return (
    <div className={classes.container}>
      <h1>Register</h1>
      <form className={classes.form} onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          className={classes.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Hasło"
          className={classes.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Powtórz Hasło"
          className={classes.input}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <p className={classes.error}>{error}</p>}
        <button type="submit" className={classes.button}>Zarejestruj</button>
      </form>
      <p className={classes.loginText}>
        Masz już konto? <Link to="/login" className={classes.loginLink}>Zaloguj</Link>
      </p>
    </div>
  );
};

export default RegisterPage;