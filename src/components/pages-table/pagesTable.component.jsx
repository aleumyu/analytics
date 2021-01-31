import React from 'react';

const PagesTable = ({ pagesData }) => {
  return (
    <div className="pagesTable">
      <table className="topPages">
        <thead>
          <tr>
            <th>URL</th>
            <th>Views</th>
          </tr>
        </thead>

        {pagesData.map(({ pageId, pageUrl, views }) => {
          return (
            <tbody>
              <tr key={pageId}>
                <td>{pageUrl}</td>
                <td>{views}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default PagesTable;
