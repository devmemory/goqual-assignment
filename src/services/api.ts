import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import { apiUtil } from '../utils/apiUtil'

const ERROR_CODE = {
  expiredToken: 401
} as const

export default class Api {
  private instance: AxiosInstance

  constructor(baseURL = '', timeout = 30000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })

    this.instance.interceptors.request.use(
      (config) => {
        const token = apiUtil.getAccessToken()

        if (token) {
          config.headers = config.headers || {}
          config.headers['Authorization'] = `bearer ${token}`
        }

        return config
      },
      (error:AxiosError) => {
        if(error.status === ERROR_CODE.expiredToken){
          //todo reissue api 필요
        }

        return Promise.reject(error)
      },
    )

    this.instance.interceptors.response.use(
      (response) => {
        console.log({ response })
        return response
      },
      (error) => {
        console.log({ error })
        return Promise.reject(error)
      },
    )
  }

  protected async get<T>(url: string, params?: any) {
    return await this.instance.get<T>(url, { params })
  }

  protected async post<T>(url: string, data: any, config?: AxiosRequestConfig) {
    return await this.instance.post<T>(url, data, config)
  }
}
