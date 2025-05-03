import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
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

  useEffect(() => {
    if (list !== undefined && list.length > 0) {
      const { startTs, endTs } = commonUtil.getInitalTime()

      setDeviceInfo({ keys: list, startTs, endTs })
    }
  }, [list])

  const onChangeTime = (date: string) => {
    setDeviceInfo((state) => {
      const { startTs, endTs } = commonUtil.getInitalTime(date)

      return { keys: state?.keys ?? [], startTs, endTs }
    })
  }

  return { statusData, time: deviceInfo?.endTs, onChangeTime }
}

export default useDashboardController
