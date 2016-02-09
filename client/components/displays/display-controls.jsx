// import React from 'react';

// import useSheet from 'react-jss';
// import { connect } from 'react-redux';


// const DisplayControls = ({ sheet, displays, sendCommand }) =>
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
//   { sendCommand }
// )(
//   useSheet(DisplayControls, STYLES)
// );





// // module.exports = React.createClass({
// // 	mixins:[
// // 		StateMixin.connect(DisplaysStore)
// // 	],
// // 	componentDidMount: function(){
		
// // 	},
// // 	render: function(){
// // 		return(
// // 			<div className="display-controls">
// // 				<button 
// // 					className="turn-on-btn btn"
// // 					onClick={this.sendCommand.bind(this, "turn-on")}
// // 				>Turn On
// // 				</button>
// // 				<button 
// // 					className="turn-off-btn btn"
// // 					onClick={this.sendCommand.bind(this, "turn-off")}
// // 				>Turn Off
// // 				</button>
// // 			</div>
// // 		)
// // 	},
// // 	sendCommand: function(command){
// // 		Actions.sendCommand(command);
// // 	},
// // 	componentWillReceiveProps: function(nextProps){
		
// // 	},
// // 	onChange: function(event, images){

// // 	}
// // });