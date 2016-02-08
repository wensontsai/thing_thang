import * as actionTypes from '../actionTypes/airport';
import { get, post } from '../utils/api';

export function changeAirportElement() {
  return async dispatch => {
    dispatch({
      type: actionTypes.CHANGE_AIRPORT
    });

    try {
      const result = await post('/api/airport');

      dispatch({
        type: actionTypes.CHANGE_AIRPORT_SUCCESS,
        airport: result
      });
    } catch(e) {
      dispatch({
        type: actionTypes.CHANGE_AIRPORT_ERROR
      });
    }
  }
}

export function requestAirportStatus() {
  return async dispatch => {
    dispatch({
      type: actionTypes.REQUEST_AIRPORT
    });

    try {
      const result = await get('/api/airport');

      dispatch({
        type: actionTypes.REQUEST_AIRPORT_SUCCESS,
        airport: result
      });
    } catch(e) {
      dispatch({
        type: actionTypes.REQUEST_AIRPORT_ERROR
      });
    }
  }
}

