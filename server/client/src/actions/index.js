import axios from 'axios';
import { browserHistory } from 'react-router'
import {FETCH_USER, FETCH_SURVEYS, FETCH_DRAFTS, SET_CONTENT, CLEAR_CONTENT} from './types';
export const fetchUser = () => async dispatch=> {
  const res = await axios.get('/api/current_user');
  dispatch({type:FETCH_USER, payload:res.data});
};

export const handleToken = (token) => async dispatch=>{
  const res = await axios.post('/api/stripe', token);
  dispatch({type: FETCH_USER, payload:res.data})
};
export const submitSurvey = (values, history) => async dispatch=>{
  const res = await axios.post('/api/surveys',values)
  history.push('/surveys')
};

export const fetchSurveys = () => async dispatch=>{
  const res = await axios.get('/api/surveys')
  dispatch({type: FETCH_SURVEYS, payload: res.data})
}
export const fetchDrafts = () => async dispatch =>{
  const res = await axios.get('/api/surveys/drafts')
  dispatch({type: FETCH_DRAFTS, payload: res.data})
}
export const setContent = (data, history) => {
  history.push('/surveys/new')
  return({type: SET_CONTENT, payload: data})
}
export const clearDrafts = () => {
  return({type:CLEAR_CONTENT})
}
