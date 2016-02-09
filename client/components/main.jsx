import React from 'react';
import { Link } from 'react-router';

import useSheet from 'react-jss';


// import children components
// import Kitten from './Kitten';

// import actions
// import { addKitten, deleteKitten } from '../actions/kittens';

const Main = ({ sheet }) => (
	<div className={sheet.classes.page}>
		<div className={sheet.classes.pageTitle}>
			Command Center
		</div>
		<div>
			<Link to='/login' >Login</Link>
		</div>
	</div>
);

const STYLES = {
	page: {
		'background': 'black'
	},
	pageTitle: {
		'font-size': '2.5rem',
		'color': 'tan'
	},
};

export default useSheet(Main, STYLES);
