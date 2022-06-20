import eventBus from './event_bus'
import registrateConsts from './consts'

import registrateGlobalNameSafely from '@/utils/registrate_global_name_safely'

const registrateGlobals = () => {
  registrateGlobalNameSafely('bus', eventBus)
  registrateConsts()
}

registrateGlobals()
