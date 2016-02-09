import React from 'react';
import { Link } from 'react-router';

import useSheet from 'react-jss';

// import children components
// import Kitten from './Kitten';

// import actions
// import { addKitten, deleteKitten } from '../actions/kittens';


const Login = ({ sheet }) => (
	<div className={sheet.classes.page}>
		<div className={sheet.classes.pageTitle}>
			Login Page
		</div>
		<div className={sheet.classes.form}>
			<div>
				<input className={sheet.classes.input} type="text" placeholder="username"/>
			</div>
			<div>
				<input className={sheet.classes.input} type="text" placeholder="password"/>
			</div>
			<div>
				<button className={sheet.classes.button}>Login</button>
			</div>
		</div>
		<Link to='/displays'>All Displays</Link>
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
	form: {
		'margin': '1rem 0'
	},
	input: {
		'margin': '0.5rem 0'
	},
	button: {
		'margin': '0.25rem 0'
	}
};

export default useSheet(Login, STYLES);
