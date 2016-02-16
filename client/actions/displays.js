import * as actionTypes from '../actionTypes/displays';
import { get, post, del } from '../utils/api';

var Api = require('../utils/api');

export function selectDisplay(display) {
  return async dispatch => {
    dispatch({
      type: actionTypes.SELECT_DISPLAY,
      currentDisplay: display
    });
  }
}

export function sendCommand(display, command) {
  return async dispatch => {
    dispatch({
      type: actionTypes.SEND_COMMAND
    });

    try {
      const data = {
        display: display,
        command: command
      };
      const result = await post('/api/sendCommand', data);

      dispatch({
        type: actionTypes.SEND_COMMAND_SUCCESS,
        result: data
      });
    } catch(e) {
      dispatch({
        // type: actionTypes.SEND_COMMAND_ERRORx`
      });
    }
  }
}




// AJAX WAY //
// export function sendCommand(display, command){
//     var paramsObj = {
//       display: display,
//       command: command
//     };

//     Api.sendCommand(paramsObj, function(data){
//       if(data !== 'fail'){

//         console.log(data);  
//         return async dispatch => {
//           dispatch({
//             type: actionTypes.SEND_COMMAND_SUCCESS,
//             result: data
//           });
//         }
//       }
//       if(data === 'fail'){
//         return async dispatch => {
//           dispatch({
//             type: actionTypes.SEND_COMMAND_ERROR,
//             result: data
//           });
//         }
//       }
//     }.bind(this) );
// }
