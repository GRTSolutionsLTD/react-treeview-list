import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import 'bootstrap';
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/dist/css/bootstrap.css';

import FoldersPage from 'containers/FoldersPage/Loadable';
import SummaryPage from 'containers/SummaryPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header/Loadable';
import Footer from '../../components/Footer/index';
import GlobalStyle from '../../global-styles';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

export default function App() {
  return (
    <div className="appWrapper">
      <Header />
      <Switch>
        <Route exact path="/folders" component={FoldersPage} />
        <Route exact path="/homePage" component={HomePage} />
        <Route exact path="/summary" component={SummaryPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />  
    </div>
  );
}
