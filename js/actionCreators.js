import axios from 'axios';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export const setSearchTerm = searchTerm => ({ type: SET_SEARCH_TERM, payload: searchTerm });
export const addApiData = apiData => ({ type: ADD_API_DATA, payload: apiData });

export const getApiDetails = imdbID => dispatch => {
  axios
    .get(`http://localhost:3001/${imdbID}`)
    .then(response => {
      dispatch(addApiData(response.data));
    })
    .catch(error => {
      console.error('axios error', error); // eslint-disable-line no-console
    });
};
