import eventBus from './eventBus'
import registrateConsts from './consts'

export default () => {
  window.eventBus = eventBus
  registrateConsts()
}
