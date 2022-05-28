import { DescriptionError } from '@/error'
import deepFreeze from '@/utils/deepFreeze.js'

const consts = deepFreeze({
  COLORS: {
    WHITE: 'WHITE',
    RED: 'RED',
    GREEN: 'GREEN'
  },
  LOCAL_STORAGE_NAMES: {
    ACCESSOR: 'var_accessor',
    GETTOR: 'var_gettor'
  }
})

export default () => {
  for (const prop in consts) {
    if (!window[prop]) {
      window[prop] = consts[prop]
    } else {
      throw new DescriptionError(`Global with name ${prop} already exists`)
    }
  }
}
