import axios from 'axios'
import Cookies from 'js-cookie'

const TOKEN = {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
} as const

export const apiUtil = {
  /**
   * @param refreshToken은 re issue인 경우 accessToken만 설정
   */
  setToken(accessToken: string, refreshToken?: string) {
    Cookies.set(TOKEN.accessToken, accessToken, { path: '/' })

    if (refreshToken) {
      Cookies.set(TOKEN.refreshToken, refreshToken, { path: '/' })
    }
  },
  getAccessToken() {
    return Cookies.get(TOKEN.accessToken)
  },
  getRefreshToken() {
    return Cookies.get(TOKEN.refreshToken)
  },
  deleteToken() {
    Cookies.remove(TOKEN.accessToken)
    Cookies.remove(TOKEN.refreshToken)
  },
  getErrorMsg(error: unknown) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || error.message

      return message
    }

    return `${error}`
  },
}
