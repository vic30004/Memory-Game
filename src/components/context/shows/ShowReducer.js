import { GET_SHOWS, SET_LOADING, RESET } from '../types';

export default (state, action) => {
  switch (action.payload) {
    case GET_SHOWS:
      return {
        ...state,
        shows: action.payload,
        loading: false
      };
    case RESET:
      return state.shows=action.payload
          
      
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
