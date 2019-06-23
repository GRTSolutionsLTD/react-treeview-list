/**
 *
 * SummaryPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSummaryPage from './selectors';
import reducer from './reducer';

import './summary.scss';

export function SummaryPage() {
  useInjectReducer({ key: 'summaryPage', reducer });

  return (
    <div>
      <Helmet>
        <title>Summary Page</title>
        <meta name="description" content="Description of SummaryPage" />
      </Helmet>
      <div className="summary"> this is summary page</div>
    </div>
  );
}

SummaryPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  summaryPage: makeSelectSummaryPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SummaryPage);
