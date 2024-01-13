import { INCREMENT, DECREMENT } from './Actions'; 

const initialState = {
  likes: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        likes: state.likes + 1
      };
    case DECREMENT:
      return {
        ...state,
        likes: state.likes - 1
      };
    default:
      return state;
  }
};

export default reducer;