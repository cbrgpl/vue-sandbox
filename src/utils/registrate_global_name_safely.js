import { DescriptionError } from '@/error'

export default (key, value) => {
  if (!window[key]) {
    window[key] = value
  } else {
    throw new DescriptionError(`Global with name ${key} already exists`)
  }
}
