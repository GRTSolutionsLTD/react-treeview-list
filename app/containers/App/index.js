/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import HomePage from 'containers/HomePage/Loadable';
import FoldersPage from 'containers/FoldersPage/Loadable';
import SummaryPage from 'containers/SummaryPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// eslint-disable-next-line import/no-unresolved
import Header from 'components/Header/Loadable';
import Footer from '../../components/Footer/index';
import HomePage from '../HomePage/index';
import GlobalStyle from '../../global-styles';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

export default function App() {
  return (
    <div className="appWrapper">
      <Header />
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/folders" component={FoldersPage} />
        <Route exact path="/summary" component={SummaryPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </div>
  );
}
