import React, { useEffect, useState } from 'react'
import { getOneQuestion } from '../../store/question';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

export default function EditQuestionForm() {
  const dispatch = useDispatch();
  const { questionId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const question = useSelector(state => state.question[questionId]);

  useEffect(() => {
    dispatch(getOneQuestion(questionId));
  }, [dispatch]);

  // console.log('this is the question', question);
  // console.log('this is the question id', questionId);

  const [title, setTitle] = useState(question?.title);
  const [description, setDescription] = useState(question?.description);
  if (!sessionUser) return (<Redirect to='/login' />);
  return (
    <div className='edit-form-page-wrapper'>
      <div className='edit-form-title-container'></div>
      <div className='edit-form-description-container'></div>
      <div className='edit-form-buttons-container'></div>
    </div>
  )
}
