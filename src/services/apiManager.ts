import * as authApi from './router/AuthApi'
import * as puglinsApi from './router/PluginsApi'

export const apiManager = {
  ...authApi,
  ...puglinsApi,
}
