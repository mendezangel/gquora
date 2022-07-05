import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { getAnswer, newAnswer, deleteAnswer } from '../../store/answer';
import './AnswersUnderQuestion.css';

export default function AnswersUnderQuestion() {
  const dispatch = useDispatch();
  const { questionId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const storeAnswers = useSelector(state => state.answer.list);

  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState([]);
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);

  const updateDescription = e => setDescription(e.target.value);

  useEffect(() => {
    dispatch(getAnswer(questionId));
  }, [dispatch]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const userId = sessionUser.id;
    const data = { userId, questionId, answer: description };
    const answer = await dispatch(newAnswer(data));
    if (answer.message === 'Success') {
      setDescription('');
      setErrors([]);
      setOpen(false)
      await dispatch(getAnswer(questionId));
    } else {
      setErrors(answer.errors);
    }
  }

  // const inputPlaceholder = () => {
  //   if (error) return error;
  //   return 'Add an answer...'
  // }

  const deleteAnswerOnClick = async (e) => {
    e.preventDefault();
    const answerId = e.target.id;
    setOpen(false)
    await dispatch(deleteAnswer(answerId));
    await dispatch(getAnswer(questionId));
  }

  return (
    <div className='answers-wrapper'>
      <div className='answer-input-section'>
        <form className='answer-question-form' onSubmit={onSubmit}>
          <div className='answer-input-container'>
            <textarea className='answer-input' type='text' onChange={updateDescription} value={description} placeholder='Add an answer...' />
            {errors?.map(error => {
              if (error.includes('Answer cannot be empty.')) return (<p key={error} className="answer-error">{error}</p>)
            })}
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
                {answer.User?.username}
              </div>
              <div className='answer-card-description'>{answer.answer}</div>
              {sessionUser.id === answer.User?.id &&
                <div>
                  <button className='delete-answer-button' onClick={() => setOpen(o => !o)} ><i id={answer.id} className='fa-solid fa-trash-can fa-xl' /></button>
                  <Popup
                    open={open}
                    onClose={closeModal}
                    // onClick={setOpen(true)}
                    closeOnDocumentClick={false}
                    modal
                  >
                    <div className='delete-answer-container'>
                      <div className='delete-answer-question'>
                        <h2>Delete your answer?</h2>
                      </div>
                      <div className='yes-delete' onClick={deleteAnswerOnClick} id={answer.id} >Delete</div>
                      <div className='no-delete' onClick={closeModal}>Cancel</div>
                    </div>
                  </Popup>
                </div>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}
