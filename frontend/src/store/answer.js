// this file contains all actions specific to answers, as well as the questions redux reducer

import { csrfFetch } from "./csrf";

const GET_ONE = 'answer/getSingleQuestion';
const SET_ANSWER = 'answer/newAnswer';
const LOAD = 'answer/load';

const load = (list) => {
  return {
    type: LOAD,
    list
  }
}

const setAnswer = (answer) => {
  return {
    type: SET_ANSWER,
    payload: answer
  }
  //answer structure {userId, questionId, answer}
}

const loadAnswer = (id) => {
  return {
    type: GET_ONE,
    answerId: id
  }
}

export const getAnswer = (questionId) => async (dispatch) => {
  const response = await csrfFetch(`/api/answers/${questionId}`);
  const list = await response.json();
  dispatch(load(list));
  return list;
}

export const newAnswer = (answerObj) => async (dispatch) => {
  const { userId, questionId, answer } = answerObj;

  const response = await csrfFetch('/api/answers', {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({ userId, questionId, answer })
  })

  const answerRes = await response.json();
  dispatch(setAnswer(newAnswer));
  return answerRes;
}

const initialState = {};

const answerReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD:
      const allAnswers = {};
      action.list.forEach(answer => {
        allAnswers[answer.id] = answer;
      });

      return {
        ...allAnswers,
        ...state,
        list: action.list
      };
    case SET_ANSWER:
      newState = { ...state };
      newState.answer = action.payload;
      return newState;
    default:
      return state;
  }
}

export default answerReducer;