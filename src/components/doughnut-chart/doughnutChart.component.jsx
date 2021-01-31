import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ newUsers, returningUsers }) => {
  const data = {
    labels: ['', ''],
    datasets: [
      {
        borderColor: 'rgba(255, 255, 255)',
        backgroundColor: ['rgba(135, 206, 235)', 'rgba(46, 49, 49, 1)'],
        data: [newUsers, returningUsers],
      },
    ],
  };
  const options = {
    legend: {
      display: false,
    },
  };
  return (
    <div className="pie">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
