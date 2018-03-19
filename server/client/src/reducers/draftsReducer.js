import {FETCH_DRAFTS} from '../actions/types'

export default function(state=[],action){
  switch (action.type) {
    case FETCH_DRAFTS:
      return action.payload
    default:
      return state
  }

}
