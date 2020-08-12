import { GET_QUOTES, SET_BG } from './types';
import { batch } from 'react-redux';
import { setBg } from '../helpers/helpers';
import axios from 'axios';

// Get Random qoute
export const getQoute = () => async dispatch => {
  try {
    const response = await axios.get(
      'http://quotes.stormconsultancy.co.uk/random.json'
    );
    batch(() => {
      dispatch({ type: GET_QUOTES, payload: response.data });
      dispatch({ type: SET_BG, payload: setBg() });
    });
  } catch (err) {
    console.log(err);
  }
};
