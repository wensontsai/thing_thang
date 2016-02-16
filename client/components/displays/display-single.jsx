import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { Router } from 'react-router';
// import { routeActions } from 'react-router-redux';

import DisplayControls from './display-controls';
import './displays.scss';


class DisplaySingle extends Component {
	componentWillMount(){

	}

	render(){
		const {
			displays
		} = this.props;

		return (
			<div className='single-display pageCenter'>
				<div className='pageTitle'>
					{displays.currentDisplay} Display
				</div>
				<DisplayControls />
				This display is now: {displays.result.command}
			</div>
		);
	}
}

export default connect(
  state => ({ displays: state.displays }),
  {}
)(DisplaySingle);
