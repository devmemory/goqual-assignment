import React, { useMemo, useRef } from 'react';

import { CCard } from '@coreui/react';
import { CChartLine } from '@coreui/react-chartjs';
import { ChartData, ChartOptions } from 'chart.js';
import { DeviceStatusModel } from 'src/models/DeviceModel';
import { commonUtil } from 'src/utils/commonUtil';
import ConditionalComp from './ConditionalComp';
import { colorSample } from 'src/constants/sampleData';

interface Props {
  chartData?: DeviceStatusModel
}

const MainChart = ({ chartData }: Props) => {
  const chartRef = useRef(null)

  const data: ChartData | null = useMemo(() => {
    if (chartData === undefined) {
      return null
    }

    let labels: string[] = []
    let datasets: any[] = []

    for (const [key, value] of Object.entries(chartData)) {
      if (value.length !== labels.length) {
        value.forEach((v) => {
          labels = [...labels, commonUtil.convertToDateString(new Date(v.ts))]
        })
      }

      datasets = [
        ...datasets,
        {
          label: key,
          data: value.map((e) => e.value),
          borderColor: colorSample[key].hex,
          fill: false,
          tension: 0.1,
        },
      ]
    }

    return {
      labels,
      datasets,
    }
  }, [chartData])

  // Options for the chart
  const options: ChartOptions = {
    responsive: true,
    plugins: {
      colors: {
        enabled: true,
      },
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
  }

  return (
    <>
      <ConditionalComp when={data === null}>
        <CCard>No data availble</CCard>
      </ConditionalComp>
      <ConditionalComp when={data !== null}>
        <CChartLine ref={chartRef} height={50} data={data!} options={options} />
      </ConditionalComp>
    </>
  )
}

export default MainChart
