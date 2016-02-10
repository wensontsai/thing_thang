import * as actionTypes from '../actionTypes/displays';

const initialState = {
  displaysArray: [
    "Europe",
    "NYC",
    "South America",
    "Asia",
    "Airport",
    "Mars"
  ],
  currentDisplay: 'michigan'
};

const selectDisplay = (state, action) => ([
  ...state,
  action.currentDisplay
]);

const sendCommand = (state, action) => ([
  ...state,
  action.result
]);

export default function displays(state = initialState, action) {
  return ({
    [actionTypes.SELECT_DISPLAY]: selectDisplay,
    [actionTypes.SEND_COMMAND_SUCCESS]: sendCommand
  }[action.type] || (s => s))(state, action);
}
