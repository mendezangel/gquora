import React, { useEffect } from 'react';
import { getOneQuestion } from '../../store/question';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function SingleQuestionCard() {
  const dispatch = useDispatch();
  const params = useParams();
  const question = useSelector(state => state.question);
  console.log(params);
  // useEffect(() => {
  //   dispatch(getOneQuestion(id));
  // }, [dispatch]);
  return (
    <div>

    </div>
  )
}
