import React from 'react';

import PagesTable from '../pages-table/pagesTable.component';
import BarChart from '../bar-chart/barChart.component';

import PAGES_DATA from './pages.datasource';
import './pages.style.scss';

const pagesData = PAGES_DATA;

const Pages = () => (
  <div className="pages">
    <h2>Top Pages</h2>
    <div className="page-data">
      <PagesTable pagesData={pagesData} />
      <BarChart pagesData={pagesData} />
    </div>
  </div>
);

export default Pages;
