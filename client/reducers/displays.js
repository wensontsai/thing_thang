import * as actionTypes from '../actionTypes/displays';

// displays Array, currentDisplay

// sendCommand

// selectDisplay

const DEFAULT_STATE = {
  displaysArray: [
    "Europe",
    "NYC",
    "South America",
    "Asia",
    "Airport",
    "Mars"
  ],
  currentDisplay: ''
};

const sendCommand = (state, action) => ([
  ...state,
  action.display
]);

const selectDisplay = (state, action) => ([
  ...state,
  ...action.display
]);

export default function displays(state = DEFAULT_STATE, action) {
  return ({
    [actionTypes.SEND_COMMAND_SUCCESS]: sendCommand,
    [actionTypes.SELECT_DISPLAY_SUCCESS]: selectDisplay,
  }[action.type] || (s => s))(state, action);
}
