// this file contains all actions specific to questions
// and the questions redux reducer

import { csrfFetch } from './csrf';

const LOAD = 'question/load';
const SET_QUESTION = 'question/newQuestion';
const REMOVE_QUESTION = 'question/removeQuestion';
const GET_ONE = 'question/getSingleQuestion';

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

const load = list => ({
  type: LOAD,
  list,
});

const getOne = question => ({
  type: GET_ONE,
  question
});

export const getQuestion = () => async dispatch => {
  const response = await csrfFetch('/api/questions');
  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
}

export const newQuestion = (question) => async (dispatch) => {
  const { ownerId, title, description } = question;
  const response = await csrfFetch('/api/questions/new', {
    method: 'POST',
    body: JSON.stringify({
      ownerId,
      title,
      description
    }),
  });
  const data = await response.json();
  if (data.message === 'Success') {
    dispatch(setQuestion(data.question));
    return data.question;
  } else {
    return data;
  }
}

export const getOneQuestion = id => async dispatch => {
  const response = csrfFetch(`/api/questions/${id}`);

  if (response.ok) {
    const question = await response.json();
    dispatch(getOne(question));
  }
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
    case LOAD:
      const allQuestions = {};
      action.list.forEach(question => {
        allQuestions[question.id] = question;
      });

      return {
        ...allQuestions,
        ...state,
        list: action.list
      };
    case GET_ONE:
      return {
        ...state,
        [action.question.id]: {
          ...state[action.question.id],
          ...action.question,
        },
      };
    default:
      return state;
  }
}

export default questionReducer;