import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import QuestionCard from '../QuestionCard';

export default function HomePage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  console.log(sessionUser);
  if (!sessionUser) return <Redirect to='/login' />
  return (
    <div>
      <h1>Home Page</h1>
      <QuestionCard />
    </div>
  )
}
