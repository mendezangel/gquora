import React, { useState, useEffect } from 'react'
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import './LoginForm.css';
import image from '../../images/splash-page-background.jpg';

export default function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to='/' />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }
  return (
    <>
      <div className='background-image-container'>
        <img className='background-image' src={image} />
      </div>
      <div className='login-form-container'>
        <form onSubmit={handleSubmit} className='login-form'>
          <h1>Login</h1>
          <div className='error-list-container'>
            <ul className='error-list'>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
          </div>
          <div className='form-group'>
            <label>
              Username or Email
            </label>
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              className='form-input-credential'
              required
            />
          </div>
          <div className='form-group'>
            <label>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='form-input-password'
              required
            />
          </div>

          <button type="submit" class='login-button'>Log In</button>
          <Link to='/signup' className='sign-up-link'>Don't have an account?</Link>
        </form>
      </div>
    </>
  );
}
