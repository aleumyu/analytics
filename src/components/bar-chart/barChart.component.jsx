import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const BarChart = ({ pagesData }) => {
  const views = pagesData.map(({ views }) => {
    return views;
  });
  const data = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        borderColor: 'rgba(135, 206, 235)',
        backgroundColor: 'rgba(135, 206, 235)',
        barThickness: 20,
        data: views,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
  };
  return (
    <div className="barChart">
      <HorizontalBar data={data} options={options} />
    </div>
  );
};

export default BarChart;
