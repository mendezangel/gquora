import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function HomePage() {
  const sessionUser = useSelector(state => state.session.user);
  console.log(sessionUser);
  if (!sessionUser) return <Redirect to='/login' />
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}
