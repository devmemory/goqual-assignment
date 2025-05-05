import { CCard, CCardBody } from '@coreui/react'
import React, { CSSProperties } from 'react'
import styles from './light.module.css'
import useLightController from './useLightController'

const DashboardLight = () => {
  const { value, onChangeLight } = useLightController()

  return (
    <CCard className={styles.div_card}>
      <CCardBody>
        <h4 id="traffic" className="card-title mb-0">
          Light status
        </h4>
        <div className={styles.div_light_control}>
          <div>
            <img
              src="/assets/light.png"
              style={
                {
                  '--value': value,
                } as CSSProperties
              }
            />
          </div>
          <div>
            <input
              className={styles.input_slider}
              style={{ '--value': `${value}%` } as CSSProperties}
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={onChangeLight}
            />
            <p>밝기: {value}%</p>
          </div>
        </div>
      </CCardBody>
    </CCard>
  )
}

export default DashboardLight
