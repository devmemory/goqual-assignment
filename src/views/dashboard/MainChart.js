import React, { useRef } from 'react'

import { CChartLine } from '@coreui/react-chartjs'

const MainChart = () => {
  const chartRef = useRef(null)

  const data = {
    labels: ['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05'],
    datasets: [
      {
        label: 'Example Time Series Data',
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  }

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
  }

  return (
    <>
      <CChartLine ref={chartRef} data={data} options={options} />
    </>
  )
}

export default MainChart
