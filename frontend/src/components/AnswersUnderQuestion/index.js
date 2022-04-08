import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getAnswer, newAnswer, deleteAnswer } from '../../store/answer';
import './AnswersUnderQuestion.css';

export default function AnswersUnderQuestion() {
  const dispatch = useDispatch();
  const { questionId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const storeAnswers = useSelector(state => state.answer.list);

  const [description, setDescription] = useState('');
  const [error, setError] = useState();

  const updateDescription = e => setDescription(e.target.value);

  useEffect(() => {
    dispatch(getAnswer(questionId));
  }, [dispatch]);

  // console.log('these are the answers', answers)

  const onSubmit = async (e) => {
    e.preventDefault();
    const userId = sessionUser.id;
    const data = { userId, questionId, answer: description };
    const answer = await dispatch(newAnswer(data));
    // console.log(answer);
    if (answer.message === 'Success') {
      setDescription('');
      setError('');
      await dispatch(getAnswer(questionId));
    } else {
      setError(answer.errors[0]);
    }
  }


  const inputPlaceholder = () => {
    if (error) return error;
    return 'Add an answer...'
  }

  const deleteAnswerOnClick = async (e) => {
    e.preventDefault();
    const answerId = e.target.id;
    await dispatch(deleteAnswer(answerId));
    await dispatch(getAnswer(questionId));
  }

  return (
    <div className='answers-wrapper'>
      <div className='answer-input-section'>
        <form className='answer-question-form' onSubmit={onSubmit}>
          <div className='answer-input-container'>
            <input className='answer-input' onChange={updateDescription} value={description} placeholder={inputPlaceholder()} />
          </div>
          <div className='submit-answer-button-container'>
            <button type='submit' className='submit-answer-button' >post</button>
          </div>
        </form>
      </div>
      <div className='displayed-answers-container'>
        {storeAnswers?.map(answer => {
          return (
            <div className='answer-card' key={answer.id}>
              <div className='answer-card-user'>
                <Link to={`/users/${answer.User.id}`}>{answer.User.username}</Link>
              </div>
              <div className='answer-card-description'>{answer.answer}</div>
              {sessionUser.id === answer.User.id &&
                <button className='delete-answer-button' onClick={deleteAnswerOnClick}><i id={answer.id} className='fa-solid fa-trash-can fa-xl' /></button>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}