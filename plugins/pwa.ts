import type { ServerPlugin, ServerApplication } from '../types.ts'

export default (): ServerPlugin => {
  return {
    name: "pwa-plugin",
    type: 'server',
    setup: (app: ServerApplication): void => {

    }
  }
}
