/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import './homePage.scss';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

export default function HomePage() {
  return (
    <div className="wrapHomePage">
      <h1 className="welcome">welcome to grth</h1>
      <h3 className="first">Our first project</h3>
      <button type="button" className="btn btn-primary">
        Hello
      </button>
    </div>
  );
}
