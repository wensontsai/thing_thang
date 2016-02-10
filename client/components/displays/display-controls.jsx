import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { sendCommand } from '../../actions/displays';
import './displays.scss';


class DisplayControls extends Component {
	render(){
		const {
			displays,
			sendCommand
		} = this.props;

		return (
			<div className='display-controls'>
				<button
					className='turn-on-btn btn'
					onClick={() => sendCommand(displays.currentDisplay, 'ON')}
				>Turn On
				</button>
				<button
					className='turn-off-btn btn'
					onClick={() => sendCommand(displays.currentDisplay, 'OFF')}
				>Turn Off
				</button>
			</div>
		)
	}
}

export default connect(
  state => ({ displays: state.displays }),
  { sendCommand }
)(DisplayControls);
