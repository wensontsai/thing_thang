import React, { Component } from 'react';
import { Link } from 'react-router';

import './auth.scss';

class Login extends Component {
	render() {
		return (
		    <div className='page'>
	    		<div className='pageTitle'>
	    			Login Page
	    		</div>
	    		<div className='form'>
	    			<div>
	    				<input className='input' type='text' placeholder='username'/>
	    			</div>
	    			<div>
	    				<input className='input' type='text' placeholder='password'/>
	    			</div>
	    			<div>
	    				<button className='button'>Login</button>
	    			</div>
	    		</div>
	    		<Link to='/displays'>All Displays</Link>
	    	</div>
	    )
	}
}

export default Login;
