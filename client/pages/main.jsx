import React, { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {
	render() {
		return (
		    <div className='page'>
		    	<div className='pageTitle'>
		    		Command Center
		    	</div>
		    	<div>
		    		<Link to='/login' >Login</Link>
		    	</div>
		    </div>
	    )
	}
}

export default Main;
