import React from 'react';
import UsersTable from '../users-table/usersTable.component';
import PieChart from '../doughnut-chart/doughnutChart.component';

import USERS_DATA from './users.datasource';

const usersData = USERS_DATA;

const Users = () => (
  <div className="users">
    <h2>New vs Returnning </h2>
    <div className="users-data">
      <UsersTable className="usersTable" {...usersData} />
      <PieChart className="pieChart" {...usersData} />
    </div>
  </div>
);

export default Users;
