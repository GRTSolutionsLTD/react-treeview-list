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
  }, []);

  const setStateFunc = currentType => {
    setTypes(
      types.map(item => {
        if (item.type === currentType) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      }),
    );
    // for (let i = 0; i < types.length; i += 1)
    //   if (types[i].type === currentType) {
    //     let x = types[i];
    //     x = { ...x, amount: x.amount + 1 };
    //     types[i] = x;
    //     setTypes(...types);
    //     console.log(types);
    //   }
    // console.log(currentType);
  };

  const GetSummary = dataList => {
    for (let i = 0; i < dataList.length; i += 1) {
      if (dataList[i].type === 'folder') GetSummary(dataList[i].children);
      else {
        const currentType = dataList[i].path.slice(
          dataList[i].path.lastIndexOf('.') + 1,
        );
        setStateFunc(currentType);
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

  // const dataList = [
  //   {
  //     type: 'jpg',
  //     amount: types.jpg,
  //   },
  //   {
  //     type: 'word',
  //     amount: types.word,
  //   },
  //   {
  //     type: 'excell',
  //     amount: types.excell,
  //   },
  // ];

  return (
    <div>
      <Helmet>
        <title>Summary Page</title>
        <meta name="description" content="Description of SummaryPage" />
      </Helmet>
      <div>l;hp;uoy</div>
      <div className="summary"> this is summary page</div>
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
