import {SET_CONTENT, CLEAR_CONTENT} from '../actions/types';
const initialState = {title: '', subject:'', body:'', recipients:''}
export default function(state=initialState, action){
  switch (action.type) {
    case SET_CONTENT:
      return action.payload
    case CLEAR_CONTENT:
      return initialState
    default:
      return state
  }

}
