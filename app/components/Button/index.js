/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

import A from './A';
import Wrapper from './Wrapper';

function Button(props) {
  // Render an anchor tag
  let button = (
    <div>
      <div className="efrat">{Children.toArray(props.children)} efrat
        <div className="efrat2">
          {Children.toArray(props.children)} efrat 2
        </div>
      </div>
    </div>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <button type="button" className="danger" onClick={props.handleRoute}>
        {Children.toArray(props.children)}
      </button>
    );
  }

  return <Wrapper>{button}</Wrapper>;
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
