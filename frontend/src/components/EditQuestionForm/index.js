import React, { useEffect, useState } from 'react'
import { getOneQuestion } from '../../store/question';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { updateQuestion } from '../../store/question';
import './EditQuestionForm.css';

export default function EditQuestionForm() {
  const dispatch = useDispatch();
  const { questionId } = useParams();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const question = useSelector(state => state.question[questionId]);

  const [title, setTitle] = useState(question?.title);
  const [description, setDescription] = useState(question?.description);

  const updateTitle = (e) => setTitle(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);

  useEffect(() => {
    dispatch(getOneQuestion(questionId));
  }, [dispatch]);

  const cancelButton = (e) => {
    e.preventDefault();
    history.push(`/questions/${questionId}`);
  }

  const updatePost = async (e) => {
    e.preventDefault();

    const payload = {
      id: questionId,
      title,
      description
    }
    const updatedQuestion = await dispatch(updateQuestion(payload));
    if (updatedQuestion) history.push(`/questions/${questionId}`)
  }

  // console.log('this is the question', question);
  // console.log('this is the question id', questionId);

  if (!sessionUser) return (<Redirect to='/login' />);
  return (
    <div className='edit-form-page-wrapper'>
      <form className='edit-form' onSubmit={updatePost}>
        <div className='edit-form-title-container'>
          <input type='text' className='edit-form-title-input' value={title} onChange={updateTitle} />
        </div>
        <div className='edit-form-description-container'>
          <textarea className='edit-form-description-input' value={description} onChange={updateDescription} />
        </div>
        <div className='edit-form-buttons-container'>
          <div className='edit-form-buttons-wrapper'>
            <button onClick={cancelButton} className='edit-form-cancel-button edit-form-buttons'>Cancel</button>
            <button type='submit' className='edit-form-save-button edit-form-buttons'>Save</button>
          </div>
        </div>
      </form>
    </div>
  )
}
