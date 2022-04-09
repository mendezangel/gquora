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
        console.log(errors);
      });
  }

  const demoUser = e => {
    e.preventDefault();
    return dispatch(sessionActions.login({ credential: 'fng', password: 'fngpassword' }));
  }

  return (
    <>
      <div className='background-image-container'>
        <img className='background-image' src={image} />
      </div>
      <div className='login-form-container'>
        <form onSubmit={handleSubmit} className='login-form'>
          <h1>Login</h1>
          {/* <div className='error-list-container'>
            <ul className='error-list'>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
          </div> */}
          <div className='form-group'>
            <label>
              Username or Email
            </label>
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              className='form-input-credential'
            // required
            />
            {errors?.map(error => {
              if (error.includes('Please provide a valid email')) return (<p className="signup-error" key={error}>{error}</p>)
              if (error.includes('The provided credentials'))
                return (<p className='signup-error' key={error}>{error}</p>)
            })}
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
            // required
            />
            {errors?.map(error => {
              if (error.includes('Please provide a password')) return (<p className="signup-error" key={error}>{error}</p>)
              if (error.includes('The provided credentials'))
                return (<p className='signup-error' key={error}>{error}</p>)
            })}
          </div>

          <button type="submit" className='login-button'>Log In</button>
          <button className='demo-user-button' onClick={demoUser}>Demo User</button>
          <Link to='/signup' className='sign-up-link'>Don't have an account?</Link>
        </form>
      </div>
    </>
  );
}
