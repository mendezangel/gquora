import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getQuestion } from '../../store/question';

export default function HomePage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  let questions;
  // console.log(sessionUser);
  useEffect(() => {
    questions = (async () => {
      await dispatch(getQuestion())
    })();
  }, [dispatch])
  console.log('these are the questions', questions);
  if (!sessionUser) return <Redirect to='/login' />
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}
