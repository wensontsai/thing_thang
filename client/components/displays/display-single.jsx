import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { Router } from 'react-router';
// import { routeActions } from 'react-router-redux';

import DisplayControls from './display-controls';
import './displays.scss';

import Nav from '../nav/nav';

class DisplaySingle extends Component {
	render(){
		const {
			displays
		} = this.props;

		return (
			<div className='display-single-container'>
				<Nav />
				<div className='single-display page'>
					<div className='pageTitle'>
						{displays.currentDisplay.name} Display
					</div>
					<DisplayControls />
					<div>
						This display is now: {displays.currentDisplay.status}
					</div>
				</div>
			</div>
		);
	}
}

export default connect(
  state => ({ displays: state.displays }),
  {}
)(DisplaySingle);
