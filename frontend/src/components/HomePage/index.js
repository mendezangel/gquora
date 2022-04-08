import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import QuestionCard from '../QuestionCard';
import Navigation from '../Navigation';

export default function HomePage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  if (!sessionUser) return <Redirect to='/login' />
  return (
    <div>
      <Navigation />
      <QuestionCard />
    </div>
  )
}
