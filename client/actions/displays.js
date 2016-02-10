import * as actionTypes from '../actionTypes/displays';
import { get, post, del } from '../utils/api';

export function selectDisplay(display) {
  return async dispatch => {
    dispatch({
      type: actionTypes.SELECT_DISPLAY,
      currentDisplay: display
    });
  }
}

export function sendCommand() {
  return async dispatch => {
    dispatch({
      type: actionTypes.SEND_COMMAND
    });

    try {
      const result = await post('/api/sendCommand');

      dispatch({
        type: actionTypes.SEND_COMMAND_SUCCESS,
        result: result
      });
    } catch(e) {
      dispatch({
        type: actionTypes.SEND_COMMAND_ERROR
      });
    }
  }
}
