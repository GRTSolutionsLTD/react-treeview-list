/**
 *
 * SummaryPage
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import ReactTable from 'react-table';
import makeSelectSummaryPage from './selectors';
import reducer from './reducer';
import './summary.scss';
import 'react-table/react-table.css';

import * as data from '../../data/folders.json';

export function SummaryPage() {
  const [types, setTypes] = useState([
    { type: 'jpg', amount: 0 },
    { type: 'excell', amount: 0 },
    { type: 'word', amount: 0 },
  ]);
  useInjectReducer({ key: 'summaryPage', reducer });

  useEffect(() => {
    GetSummary(data.default);
    setTypes(list);
  }, []);

  const list = [...types];
  const GetSummary = dataList => {
    for (let i = 0; i < dataList.length; i += 1) {
      if (dataList[i].type === 'folder' && dataList[i].children) GetSummary(dataList[i].children);
      else {
        const currentType = dataList[i].path.slice(
          dataList[i].path.lastIndexOf('.') + 1,
        );
        for (let j = 0; j < list.length; j += 1){
          if (list[j].type === currentType)
          {list[j].amount+=1;
            break;
          }
          if(j===list.length-1){
            const newInstance = {type: currentType, amount: 1};
            list.push(newInstance);
            break;
          }
        }
      }
    }
  };

  const columns = [
    {
      Header: 'Type',
      accessor: 'type',
    },
    {
      Header: 'Amount',
      accessor: 'amount',
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Summary Page</title>
        <meta name="description" content="Description of SummaryPage" />
      </Helmet>
      <ReactTable data={types} columns={columns} /> 
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
