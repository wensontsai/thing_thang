import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { selectDisplay } from '../../actions/displays';
import './displays.scss';

import Nav from '../nav/nav';

class DisplaysAll extends Component {
    render(){
        const { 
            displays, 
            selectDisplay 
        } = this.props;

        return (
            <div className='display-all-container'>
                <Nav />
                <div className='page'>
                    <div className='pageTitle'>
                        All Displays Page
                    </div>
                    <div className='display-all'>
                        {displays.displaysArray.map(display => (
                        <Link to={`/displays/${display}`}
                            key={`${display}`}
                            onClick={() => selectDisplay(display)}
                        >
                            <div className='display-link'>
                                <div className='display-name'>
                                    {display}
                                </div>
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
  state => ({ displays: state.displays }),
  { selectDisplay }
)(DisplaysAll);
