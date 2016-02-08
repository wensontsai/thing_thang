import React from 'react';
import { Link } from 'react-router';

import useSheet from 'react-jss';


// import children components
// import Kitten from './Kitten';

// import actions
// import { addKitten, deleteKitten } from '../actions/kittens';

const Main = ({ sheet }) => (
	<div className={sheet.classes.container}>
		<div className={sheet.classes.page}>
			<div className={sheet.classes.pageTitle}>
				Gulliver's Gate Command Center
			</div>
			<div>
				<Link to='/login' >Login</Link>
			</div>
		</div>
	</div>
);

const STYLES = {
	container: {
		padding:'0.5rem',
		display: 'flex',
		textAlign: 'center',
		flexBasis: '88%',
		width: '90%',
		alignSelf: 'stretch',
		flexWrap: 'wrap'
	},
	page: {
		background: 'black'
	},
	pageTitle: {
		fontSize: '3rem',
		color: 'gray'
	}
};

export default useSheet(Main, STYLES);
