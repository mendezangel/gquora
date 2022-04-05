// this file contains all actions specific to questions
// and the questions redux reducer

import { csrfFetch } from './csrf';

const SET_QUESTION = 'question/newQuestion';
const REMOVE_QUESTION = 'question/removeQuestion';

//action creator for a new question, this returns an action(js object)
const setQuestion = (question) => {
  return {
    type: SET_QUESTION,
    payload: question
  }
}

const removeQuestion = () => {
  return {
    type: REMOVE_QUESTION
  }
}

export const newQuestion = (question) => async (dispatch) => {
  const { ownerId, title, description } = question;
  const response = await csrfFetch('/api/question/new', {
    method: 'POST',
    body: JSON.stringify({
      ownerId,
      title,
      description
    }),
  });
  const data = await response.json();
  console.log(data);
  // dispatch(setQuestion(data))
}

const initialState = {};

const questionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_QUESTION:
      newState = { ...state };
      newState.question = action.payload;
      return newState;
    case REMOVE_QUESTION:
      newState = { ...state };
      newState.question = null;
      return newState;
    default:
      return state;
  }
}

export default questionReducer;