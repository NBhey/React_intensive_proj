import axios from 'axios';
import { SEARCH, LANGUAGES, SORT } from '../constants';

const BASE_URL = 'https://gutendex.com/books?';

export const getBooks = async ({search, lang, sort}) => {
  try {
    const params = [
      search ? `search=${encodeURIComponent(search)}` : '',
      lang ? `languages=${lang}` : '',
      sort ? `sort=${sort}` : '',
    ].filter(Boolean);
    console.log(params.join('&'));
    const res = await axios.get(`${BASE_URL}${params.join('&')}`);
    
    return res;
  } catch (error) {
    console.log(error);
  }
};
