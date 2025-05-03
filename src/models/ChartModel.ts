export interface ChartModel {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    borderColor:string
  }[]
}
