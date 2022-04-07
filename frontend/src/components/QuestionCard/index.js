import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestion } from '../../store/question';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import './QuestionCard.css';

export default function QuestionCard() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.question.list);

  useEffect(() => {
    dispatch(getQuestion());
  }, [dispatch]);
  return (
    <div className='questions-container'>
      {questions?.map(question => {
        return (
          <div className='card-container' key={question.id}>
            <div className='user-title-container'>
              <div className='title-container'>
                <Link to={`/questions/${question.id}`}>
                  <h3>{question.title}</h3>
                </Link>
              </div>
              <div className='user-container'>
                <Link to={`/users/${question.ownerId}`}>
                  <p>{question.User.username}</p>
                </Link>
              </div>
            </div>
            <div className='question-body'>
              <p className='question-body-text'>{question.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  )
}
