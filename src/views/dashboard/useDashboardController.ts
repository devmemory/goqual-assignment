import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { statusKeySample, statusValueSample } from 'src/constants/sampleData'
import { useInterval } from 'src/hooks/useInterval'
import { DeviceInfoModel } from 'src/models/DeviceModel'
import { apiManager } from 'src/services/apiManager'
import { commonUtil } from 'src/utils/commonUtil'

const useDashboardController = () => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfoModel>()

  const { data: list } = useQuery({
    queryKey: ['key'],
    queryFn: apiManager.getDeviceKeyList,
  })

  const { data: statusData } = useQuery({
    queryKey: [deviceInfo?.keys, deviceInfo?.startTs, deviceInfo?.endTs],
    queryFn: () => deviceInfo && apiManager.getDeviceValue(deviceInfo),
    enabled: deviceInfo !== undefined,
  })

  const { startInterval, stopInterval } = useInterval(() => {
    const time = commonUtil.getCurrentTimeString()

    console.log(`[set] new time interval : ${time}`)

    onChangeTime(time)
  }, 5000)

  useEffect(() => {
    if (list !== undefined && list.length > 0) {
      const { startTs, endTs } = commonUtil.getInitalTime()

      setDeviceInfo({
        keys: statusKeySample,
        // list.filter(e => statusKeySample.includes(e)),
        startTs,
        endTs,
      })

      startInterval()
    }

    return () => {
      stopInterval()
    }
  }, [list])

  function onChangeTime(date: string) {
    setDeviceInfo((state) => {
      const { startTs, endTs } = commonUtil.getInitalTime(date)

      return { keys: state?.keys ?? [], startTs, endTs }
    })
  }

  return { statusData: statusValueSample(), time: deviceInfo?.endTs, onChangeTime }
}

export default useDashboardController
