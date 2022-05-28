import { DescriptionError } from '@/error'

import listeners from './listeners.js'

class EventBus {
  constructor (listeners) {
    this.listeners = listeners
  }

  emit (eventName, ...params) {
    const listener = this.listeners[eventName]

    if (!listener) {
      throw new DescriptionError(`There is no handler for event with name "${eventName}"`)
    }

    this.logTrace(eventName)
    listener(params)
  }

  logTrace (eventName) {
    if (process.env.VUE_APP_EVENT_BUS_TRACE === 'true') {
      console.trace(`EventBus; "${eventName}" have been emitted`)
    }
  }
}

export default new EventBus(listeners)
