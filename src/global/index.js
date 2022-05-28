import eventBus from './event_bus'
import registrateConsts from './consts'

const registrateGlobals = () => {
  window.eventBus = eventBus
  registrateConsts()
}

registrateGlobals()
