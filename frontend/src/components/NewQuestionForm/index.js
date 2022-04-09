import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { newQuestion } from '../../store/question';
import { Redirect, useHistory } from 'react-router-dom';
import './NewQuestionForm.css';

export default function NewQuestionForm() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState([]);

  if (!sessionUser) return (<Redirect to='/login' />);
  const handleSubmit = async e => {
    e.preventDefault();
    const payload = {
      ownerId: sessionUser.id,
      title,
      description
    };
    const question = await dispatch(newQuestion(payload));
    if (question.message === 'Failure') {
      setErrors(question.errors);
    } else {
      setErrors([]);
      setTitle('');
      setDescription('');
      history.push(`/`);
    }
  }

  const cancelButton = (e) => {
    e.preventDefault();
    history.push(`/`);
  }

  return (
    <div>
      <div className='new-question-wrapper'>
        <form onSubmit={handleSubmit} className='new-question-form'>
          {errors && <div className='new-question-errors-container'>
            <ul className='new-question-errors-list'>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
          </div>}
          <div className='new-question-title-container'>
            <input type='text' className='new-question-title-field' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
          </div>
          <div className='new-question-description-container'>
            <textarea type='text' className='new-question-description-input' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className='new-question-buttons-container'>
            <div className='new-question-buttons-wrapper'>
              <button onClick={cancelButton} className='new-question-cancel-button new-question-buttons'>Cancel</button>
              <button type='submit' className='new-question-button new-question-buttons'>Post</button>
            </div>
          </div>


        </form>
      </div>
    </div>
  )
}
