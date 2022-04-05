import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function NewQuestionForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div>
      <div className='new-question-form-container'>
        <form>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <input type='text' className='title-field' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' required />
          <textarea type='text' className='description-field' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
        </form>
      </div>
    </div>
  )
}
