import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './login-page.module.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Zapisz token i login do localStorage
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('username', username); // <-- Zapisujemy login użytkownika

      // Przekieruj do strony głównej
      navigate('/home');
    } catch (err) {
      setError(err.message || 'An error occurred');
    }
  };

  return (
    <div className={classes.container}>
      <h1>Login</h1>
      <form className={classes.form} onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Nazwa"
          className={classes.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Hasło"
          className={classes.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className={classes.error}>{error}</p>}
        <button type="submit" className={classes.button}>Login</button>
      </form>
      <p className={classes.registerText}>
        Nie masz konta? <Link to="/register" className={classes.registerLink}>Zarejestruj</Link>
      </p>
    </div>
  );
};

export default LoginPage;