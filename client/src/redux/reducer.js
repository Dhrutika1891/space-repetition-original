export const UPDATE_LEVEL = "UPDATE_LEVEL";
export const FETCH_CARDS = "FETCH_CARDS";

const intitialUserState = {
  level: 0,
  cards: [],
};

const reducer = (state = intitialUserState, action) => {
  switch (action.type) {
    case UPDATE_LEVEL: {
      return {
        ...state,
        level: action.level,
      };
    }
    case FETCH_CARDS: {
      return {
        ...state,
        cards: action.cards,
      };
    }
    default:
      return state;
  }
};
export default reducer;
