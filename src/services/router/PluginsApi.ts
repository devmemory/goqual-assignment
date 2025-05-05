import { DeviceInfoModel, DeviceStatusModel } from 'src/models/DeviceModel';
import { commonUtil } from 'src/utils/commonUtil';
import Api from '../api';

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

    const res = await super.get<DeviceStatusModel>(
      `/api/plugins/telemetry/DEVICE/${this.deviceId}/values/timeseries`,
      { keys, startTs, endTs },
    )

    return res.data
  }

  /**
   * ### API 스펙 상이
   * - 쿼리 파라미터로 상태 키 = 값을 전달하여 상태 값을 제어
   * - 전구 제어 시 brightness=value로 제어 요청
   */
  async updateDeviceValue(brightness: number) {
    // 스펙과 동일한 요청 500에러 발생
    // let url = `/api/plugins/telemetry/DEVICE/${this.deviceId}/SERVER_SCOPE`

    // url += `?brightness=${value}`

    // const res = await super.post(url, null)

    // post body에 데이터 세팅 후 요청시 200(서버 확인 필요)
    const res = await super.post(`/api/plugins/telemetry/DEVICE/${this.deviceId}/SERVER_SCOPE`, {
      brightness,
    })

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
