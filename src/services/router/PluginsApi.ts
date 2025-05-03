import { DeviceInfoModel, DeviceStatusModel } from 'src/models/DeviceModel'
import { commonUtil } from 'src/utils/commonUtil'
import Api from '../api'

class PuglinsApi extends Api {
  private deviceId = import.meta.env.VITE_DEVICEID

  async getDeviceKeyList() {
    const res = await super.get<string[]>(
      `/api/plugins/telemetry/DEVICE/${this.deviceId}/keys/timeseries`,
    )

    return res.data
  }

  async getDeviceValue(model: DeviceInfoModel) {
    const keys = model.keys.toString()
    const startTs = commonUtil.getMiliseconds(model.startTs)
    const endTs = commonUtil.getMiliseconds(model.endTs)

    const res = await super.get<DeviceStatusModel[]>(
      `/api/plugins/telemetry/DEVICE/${this.deviceId}/values/timeseries`,
      { keys, startTs, endTs },
    )

    return res.data
  }

  async updateDeviceValue(value: number) {
    let url = `/api/plugins/telemetry/DEVICE/${this.deviceId}/SERVER_SCOPE`

    url += `brightness=${value}`

    const res = await super.post(url, null)

    console.log({ res })

    return res.data
  }
}

export const getDeviceKeyList = async () => {
  const api = new PuglinsApi()

  return await api.getDeviceKeyList()
}

export const getDeviceValue = async (model: DeviceInfoModel) => {
  const api = new PuglinsApi()

  return await api.getDeviceValue(model)
}

export const updateDeviceValue = async (value: number) => {
  const api = new PuglinsApi()

  return await api.updateDeviceValue(value)
}
