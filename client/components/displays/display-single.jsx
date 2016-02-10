import React, { Component, PropTypes } from 'react';
// import { Router } from 'react-router';

import { connect } from 'react-redux';

import DisplayControls from './display-controls';

// import { routeActions } from 'react-router-redux';

import './displays.scss';


class DisplaySingle extends Component {
	render(){
		const {
			displays
		} = this.props;

		return (
			<div className='single-display pageCenter'>
				<div className='pageTitle'>
					{displays.currentDisplay} Display
				</div>

			</div>
		);
	}
}

export default connect(
  state => ({ displays: state.displays }),
  {}
)(DisplaySingle);
