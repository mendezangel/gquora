import React, { useEffect } from 'react';
import { getOneQuestion } from '../../store/question';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './SingleQuestionCard.css';

export default function SingleQuestionCard() {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.questionId;
  const question = useSelector(state => state.question[id]);
  useEffect(() => {
    dispatch(getOneQuestion(id));
  }, [dispatch]);
  console.log('this is the question', question);
  return (
    <div className='whole-page-div'>
      <div className='question-container'>
        <div className='title-container'><h2 className='title-text'>{question.title}</h2></div>
        <div className='author-container'>
          <div className='author-name'>
            <Link to={`/users/${question.User.id}`}>
              {question.User.username}
            </Link>
          </div>
        </div>
        <div className='description-container'>
          <p className='description-text'>{question.description}</p>
        </div>
      </div>
    </div>
  )
}
