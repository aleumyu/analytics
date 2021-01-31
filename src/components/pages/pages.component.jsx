import React from 'react';

import PagesTable from '../pages-table/pagesTable.component';
import BarChart from '../bar-chart/barChart.component';

import PAGES_DATA from './pages.datasource';

const pagesData = PAGES_DATA;

const Pages = () => (
  <div className="pages">
    <h1>Top Pages</h1>
    <PagesTable pagesData={pagesData} />
    <BarChart pagesData={pagesData} />
  </div>
);

export default Pages;
