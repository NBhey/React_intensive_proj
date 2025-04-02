export const SET_SEARCH_OBJECT = 'SET_SEARCH_OBJECT';
export const CLEAR_SEARCH_OBJECT = 'CLEAR_SEARCH_OBJECT';

export const setSearchObject = (searchObject) => ({
  type: SET_SEARCH_OBJECT,
  payload: searchObject,
});

export const clearSearchObject = () => ({
  type: CLEAR_SEARCH_OBJECT,
});