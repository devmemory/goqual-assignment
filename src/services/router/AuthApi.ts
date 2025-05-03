import { AuthModel } from 'src/models/AuthModel'
import Api from '../api'
import { apiUtil } from '../../utils/apiUtil'

class AuthApi extends Api {
  async login(model: AuthModel) {
    const res = await super.post<{
      token: string
      refreshToken: string
    }>('/api/auth/login', model)

    const accessToken = res.data.token
    const refreshToken = res.data.refreshToken

    if (accessToken && refreshToken) {
      apiUtil.setToken(accessToken, refreshToken)

      return
    }

    throw new Error(`login fail`)
  }
}

export const login = async (model: AuthModel) => {
  const api = new AuthApi()

  await api.login(model)
}
