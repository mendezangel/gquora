import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import image from '../../images/splash-page-background.jpg';
import './SignupFormPage.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
      <div className="background-image-container">
        <img className='background-image' src={image} />
      </div>
      <div className="signup-form-container">
        <form onSubmit={handleSubmit} className='signup-form' id='signup-form' >
          <div className="signup-h1-container">
            <h1>Sign Up</h1>
          </div>
          {errors &&
            <div className="errors-container">
              <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
              </ul>
            </div>
          }
          <div className="signup-form-group">
            <label>
              Email
              <input
                className="email-input input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="signup-form-group">
            <label>
              Username
              <input
                className="username-input input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="signup-form-group">
            <label>
              Password
              <input
                className="password-input input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="signup-form-group">
            <label>
              Confirm Password
              <input
                className="confirm-password-input input"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="signup-button-container">
            <button type="submit" className="signup-button">Sign Up</button>
            <Link to='/login' className='link-to-login'>
              Already have an account?
            </Link>
          </div>

        </form>
      </div>
    </>
  );
}

export default SignupFormPage;
