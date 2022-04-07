import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { newQuestion } from '../../store/question';
import { Redirect, useHistory } from 'react-router-dom';

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
      //TODO setup express route and all that for /questions/:questionId
    }
  }

  return (
    <div>
      <div className='new-question-form-container'>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <input type='text' className='title-field' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' required />
          <textarea type='text' className='description-field' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
          <button type='submit' className='new-question-btn'>Post Question</button>
        </form>
      </div>
    </div>
  )
}
