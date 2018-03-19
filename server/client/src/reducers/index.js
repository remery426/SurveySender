import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer'
import draftsReducer from './draftsReducer'
import contentReducer from './contentReducer'

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer,
  drafts: draftsReducer,
  content: contentReducer
});
