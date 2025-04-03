import {ADD_SEARCH_HISTORY, CLEAR_SEARCH_HISTORY} from '../actions/actionSearchHistory';
const initLocal=localStorage.getItem('searchParams')
    ? JSON.parse(localStorage.getItem('searchParams'))
    : [];
const initialSearchHistory = {
  searchHistory: initLocal,
  maxHistorylength: 10,
};

export const historyReducer = (state = initialSearchHistory, action) => {
  switch (action.type) {
    case ADD_SEARCH_HISTORY:
      const newHistory = [...state.searchHistory, action.payload];
      if (newHistory.length > state.maxHistorylength) {
        newHistory.shift();
      }
      return {
        ...state,
        searchHistory: newHistory,
      };

    case CLEAR_SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: [],
      };

    default:
      return state;
  }
};
