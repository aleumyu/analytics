import React from 'react';

const PagesTable = ({ pagesData }) => {
  return (
    <div className="pagesTable">
      <table>
        <thead>
          <tr>
            <th>URL</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          {pagesData.map(({ pageId, pageUrl, views }) => {
            return (
              <tr key={pageId}>
                <td>{pageUrl}</td>
                <td>{views}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PagesTable;
