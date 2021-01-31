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
            <td>{newUsers}</td>
            <td>{returningUsers}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
