import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FoldersPage from 'containers/FoldersPage/Loadable';
import SummaryPage from 'containers/SummaryPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header/Loadable';

import GlobalStyle from '../../global-styles';

import './app.scss';

export default function App() {
  return (
    <div className="appWrapper">
      <Header />
      <Switch>
        <Route exact path="/" component={FoldersPage} />
        <Route exact path="/summary" component={SummaryPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
