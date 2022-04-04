import React, { useState, useEffect } from 'react'
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

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
    <div className='login-form-container'>
      <form onSubmit={handleSubmit} className='login-form'>
        <h1>Login</h1>
        <ul className='error-list'>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div className='form-group'>
          <label>
            Username or Email
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
              className='form-input'
            />
          </label>
        </div>
        <div className='form-group'>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='form-input'
            />
          </label>
        </div>

        <button type="submit" class='login-button'>Log In</button>
      </form>
    </div>
  );
}
