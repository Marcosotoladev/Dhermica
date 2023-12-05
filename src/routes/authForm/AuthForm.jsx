// src/components/AuthForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAuth } from '../authForm/AuthContext'; // Importa el contexto de autenticación
import './AuthForm.css';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const user = useAuth(); // Usa el contexto de autenticación para obtener el usuario
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      await auth.currentUser.updateProfile({ displayName });
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleRegistration = () => {
    setIsRegistered((prev) => !prev);
  };

  return (
    <div className="auth-container">
      {!user ? (
        <div className="auth-form">
          <h2>{isRegistered ? 'Sign In' : 'Sign Up'}</h2>
          <form>
            {!isRegistered && (
              <div className="input-group">
                <label>Name:</label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </div>
            )}

            <div className="input-group">
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="input-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {isRegistered ? (
              <button className="auth-button" onClick={handleSignIn}>
                Sign In
              </button>
            ) : (
              <button className="auth-button" onClick={handleSignUp}>
                Sign Up
              </button>
            )}

            <p className="toggle-link" onClick={toggleRegistration}>
              {isRegistered ? 'Need to sign up?' : 'Already have an account? Sign in.'}
            </p>
          </form>

          {error && <p className="error-message">{error}</p>}
        </div>
      ) : (
        <div className="user-info">
          <h2>Welcome, {user.displayName || user.email}!</h2>
          <button className="auth-button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthForm;

