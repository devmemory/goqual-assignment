import classNames from 'classnames'
import React, { useMemo } from 'react'

import { CCard, CCardBody, CCardFooter, CCol, CProgress, CRow } from '@coreui/react'

import CDatePicker from '../forms/date-picker/CDatePicker'
import MainChart from './MainChart'
import useDashboardController from './useDashboardController'
import { colorSample } from 'src/constants/sampleData'

const Dashboard = () => {
  const { statusData, time, onChangeTime } = useDashboardController()

  const progressExample = useMemo(() => {
    return statusData
      ? Object.entries(statusData).map(([title, values]) => {
          const value = values[values.length - 1].value

          return { title, value, color: colorSample[title].ui }
        })
      : []
  }, [statusData])

  console.log({ statusData, progressExample })

  return (
    <CCard className="mb-4">
      <CCardBody>
        <CRow>
          <CCol sm={5}>
            <h4 id="traffic" className="card-title mb-0">
              Device Status
            </h4>
          </CCol>
          <CCol>
            <div className="d-flex justify-content-end">
              <CDatePicker value={time} onChange={onChangeTime} />
            </div>
          </CCol>
        </CRow>
        <MainChart chartData={statusData} />
      </CCardBody>
      <CCardFooter>
        <CRow
          xs={{ cols: 1, gutter: 4 }}
          sm={{ cols: 2 }}
          lg={{ cols: 4 }}
          xl={{ cols: 5 }}
          className="mb-2 text-center"
        >
          {progressExample.map((item, index, items) => (
            <CCol
              className={classNames({
                'd-none d-xl-block': index + 1 === items.length,
              })}
              key={index}
            >
              <div className="text-body-secondary">{item.title}</div>
              <div className="fw-semibold text-truncate">{item.value}%</div>
              <CProgress thin className="mt-2" color={item.color} value={item.value} />
            </CCol>
          ))}
        </CRow>
      </CCardFooter>
    </CCard>
  )
}

export default Dashboard
