// import React from 'react';
// import { Router } from 'react-router';

// import useSheet from 'react-jss';
// import { connect } from 'react-redux';

// import { sendCommand } from '../../actions/displays';
// import DisplayControls from './display-controls';


// const DisplaySingle = ({ sheet, displays }) =>
// 	<div className="single-display pageCenter">
// 		<div className="pageTitle">
// 			{displays.currentDisplay} Display
// 		</div>
// 		<DisplayControls />
// 	</div>

// const STYLES = {
 
// };

// export default connect(
//   state => ({ displays: state.displays }),
//   {}
// )(
//   useSheet(DisplaySingle, STYLES)
// );




// // module.exports = React.createClass({
// // 	mixins:[
// // 		Router.CurrentPath
// // 	],
// // 	componentWillMount: function(){
// // 		var display = this.props.location.pathname.split('/')[2];
// // 		Actions.selectDisplay(display);
// // 	},
// // 	render: function(){
// // 		return(
// // 			<div className="single-display pageCenter">
// // 				<div className="pageTitle">
// // 					{this.state.currentDisplay} Display
// // 				</div>
// // 				<DisplayControls />
// // 			</div>
// // 		)
// // 	},
// // 	componentWillReceiveProps: function(nextProps){
		
// // 	},
// // });