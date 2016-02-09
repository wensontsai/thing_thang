import React from 'react';
import { Link } from 'react-router';

import useSheet from 'react-jss';
import { connect } from 'react-redux';

import { selectDisplay } from '../actions/displays';


const DisplaysAll = ({ sheet, displays, selectDisplay }) =>
  <div className={sheet.classes.page}>
    <div className={sheet.classes.pageTitle}>
      All Displays Page
    </div>
    <div className={sheet.classes.allDisplays}>
      {displays.displaysArray.map(display => (
          <Link to={`/displays/${display}`}
            key={`${display}`}
            onClick={selectDisplay.bind(this, display)}
          >
            <div className={sheet.classes.displayLink}>
              <div className={sheet.classes.displayName}>
                {display}
              </div>
            </div>
          </Link>
      ))}
    </div>
  </div>


const STYLES = {
  page: {
    'background': 'black'
  },
  pageTitle: {
    'font-size': '2.5rem',
    'color': 'tan'
  },
  displayLink: {
    'height' : '300px',
    'width' : '300px',
    'float' : 'left',
    'border' : 'gray solid 1px',
    'margin' : '1rem'
  },
  displayName: {
    'text-align' : 'center'
  }
};

export default connect(
  state => ({ displays: state.displays }),
  { selectDisplay }
)(
  useSheet(DisplaysAll, STYLES)
);
