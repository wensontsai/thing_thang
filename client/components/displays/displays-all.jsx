import React from 'react';
import { Link } from 'react-router';

import useSheet from 'react-jss';
import { connect } from 'react-redux';

import { selectDisplay } from '../../actions/displays';


import './displays.scss';

const DisplaysAll = ({ sheet, displays, selectDisplay }) =>
  <div className='page'>
    <div className='pageTitle'>
      All Displays Page
    </div>
    <div className='allDisplays'>
      {displays.displaysArray.map(display => (
          <Link to={`/displays/${display}`}
            key={`${display}`}
            onClick={selectDisplay.bind(this, display)}
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


const STYLES = {
};

export default connect(
  state => ({ displays: state.displays }),
  { selectDisplay }
)(
  useSheet(DisplaysAll, STYLES)
);
