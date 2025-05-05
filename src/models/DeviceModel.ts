export interface DeviceInfoModel {
  keys: string[]
  startTs: string
  endTs: string
}

export interface DeviceStatusModel {
  [key: string]: {
    value: number
    ts: number
  }[]
}
