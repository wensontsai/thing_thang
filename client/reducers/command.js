import * as actionTypes from '../actionTypes/command';

const DEFAULT_STATE = [];

const sendCommand = (state, action) => ([
  ...state,
  action.command
]);



export default function commands(state = DEFAULT_STATE, action) {
  return ({
    [actionTypes.SEND_COMMAND_SUCCESS]: sendCommand,
  }[action.type] || (s => s))(state, action);
}




