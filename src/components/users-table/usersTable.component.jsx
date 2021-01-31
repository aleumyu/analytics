import React from 'react';

const UsersTable = ({ newUsers, returningUsers }) => {
  return (
    <div className="usersTable">
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>New Users</td>
            <td>{newUsers}</td>
          </tr>
          <tr>
            <td>Returning Users</td>
            <td>{returningUsers}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
