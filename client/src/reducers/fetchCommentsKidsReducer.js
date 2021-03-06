import {
  LOADING_COMMENTS_KIDS,
  FETCH_COMMENTS_KIDS_SUCCESS,
  FETCH_COMMENTS_KIDS_FAIL,
} from '../actions/fetchCommentsKidsAction'

const INITIAL_STATE = {
  loadingKids: {},
  kids: {},
  error: {},
}

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case LOADING_COMMENTS_KIDS:
      return {
        ...state,
        loadingKids: { ...state.loadingKids, [actions.payload.id]: true },
        error: { ...state.error, [actions.payload.id]: false },
      }
    case FETCH_COMMENTS_KIDS_SUCCESS:
      return {
        ...state,
        kids: { ...state.kids, [actions.payload.id]: actions.payload.data },
      }
    case FETCH_COMMENTS_KIDS_FAIL:
      return {
        ...state,
        loadingKids: { ...state.loadingKids, [actions.payload.id]: false },
        error: { ...state.error, [actions.payload.id]: true },
      }
    default:
      return state
  }
}
