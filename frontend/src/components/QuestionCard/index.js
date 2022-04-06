import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestion } from '../../store/question';
import { Link } from 'react-router-dom';

export default function QuestionCard() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.question);

  useEffect(() => {
    dispatch(getQuestion());
  }, [dispatch]);
  console.log(questions.list);
  return (
    <div className='questions-container'>
      {questions.map(question => {
        return (
          <div className='card-container' key={question.id}>
            <div className='user-title-container'>
              <div className='user-container'>
                <Link to={`/users/${question.ownerId}`}>
                  <h1>{question.User.username}</h1>
                </Link>
              </div>
              <div className='title-container'>
                <Link to={`/questions/${question.id}`}>
                  <h3>{question.title}</h3>
                </Link>
              </div>
            </div>
            <div className='question-body'>

            </div>
          </div>
        );
      })}
    </div>
  )
}
