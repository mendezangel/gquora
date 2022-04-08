import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { deleteQuestion } from '../../store/question';
import './EditDeletePage.css';

export default function EditDeletePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { questionId } = useParams();

  const deletePost = async e => {
    e.preventDefault();
    await dispatch(deleteQuestion(questionId));
    history.push('/');
  }

  const redirectToEdit = e => {
    e.preventDefault();
    history.push(`/questions/${questionId}/edit`)
  };

  const cancelButton = (e) => {
    e.preventDefault();
    history.push(`/questions/${questionId}`);
  };

  return (
    <div className='edit-delete-page-div'>
      <div className='modal'>
        <div className='prompt'>
          <h3 className='prompt-text'>
            What would you like to do?
          </h3>
        </div>
        <div className='buttons'>
          <div className='delete-btn-container btn-container'>
            <button className='delete-btn btn' onClick={deletePost}>
              <p className='delete-btn-text text'>Delete Question</p>
            </button>
          </div>
          <div className='edit-btn-container btn-container'>
            <button className='edit-btn btn' onClick={redirectToEdit}>
              <p className='edit-btn-text text'>Edit Question</p>
            </button>
          </div>
          <div className='cancel-btn-container btn-container'>
            <button className='cancel-btn btn' onClick={cancelButton}>
              <p className='cancel-btn-text text'>Cancel</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
