import React from 'react';
import UsersTable from '../users-table/usersTable.component';
import PieChart from '../doughnut-chart/doughnutChart.component';

import USERS_DATA from './users.datasource';

const usersData = USERS_DATA;

const Users = () => (
  <div className="pages">
    <h1>New vs Returnning </h1>
    <UsersTable {...usersData} />
    <PieChart {...usersData} />
  </div>
);

export default Users;
