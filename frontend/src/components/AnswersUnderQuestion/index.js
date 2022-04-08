import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAnswer, newAnswer } from '../../store/answer';

export default function AnswersUnderQuestion() {
  const dispatch = useDispatch();
  const { questionId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const answers = useSelector(state => state.answer);

  const [description, setDescription] = useState('');
  const [error, setError] = useState();

  const updateDescription = e => setDescription(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    const userId = sessionUser.id;
    const data = { userId, questionId, answer: description };
    const answer = await dispatch(newAnswer(data));
    // console.log(answer);
    if (answer.message === 'Success') {
      setDescription('')
      setError('');
    } else {
      setError(answer.errors[0]);
      console.log('error', error);
    }
  }

  const inputPlaceholder = () => {
    if (error) return error;
    return 'Add an answer...'
  }

  useEffect(() => {
    dispatch(getAnswer());
  }, [dispatch]);

  return (
    <div className='answers-wrapper'>
      <div className='answer-input-section'>
        <form className='answer-question-form' onSubmit={onSubmit}>
          <div className='answer-input-container'>
            <input className='answer-input' onChange={updateDescription} value={description} placeholder={inputPlaceholder()} />
          </div>
          <div className='submit-answer-button-container'>
            <button type='submit'>post</button>
          </div>
        </form>
      </div>
      <div className='displayed-answers-section'></div>
    </div>
  )
}
