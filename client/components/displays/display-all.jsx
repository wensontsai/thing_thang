import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';

import { selectDisplay } from '../../actions/displays';

import './displays.scss';


class DisplaysAll extends Component {
    render(){
        const { 
            displays, 
            selectDisplay 
        } = this.props;

        return (
        <div className='page'>
            <div className='pageTitle'>
                All Displays Page
            </div>
            <div className='allDisplays'>
                {displays.displaysArray.map(display => (
                <Link to={`/displays/${display}`}
                    key={`${display}`}
                    onClick={() => selectDisplay(display)}
                >
                    <div className='displayLink'>
                        <div className='displayName'>
                            {display}
                        </div>
                    </div>
                </Link>
                ))}
            </div>
        </div>
        );
    }
}

export default connect(
  state => ({ displays: state.displays }),
  { selectDisplay }
)(DisplaysAll);
