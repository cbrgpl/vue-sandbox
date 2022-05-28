import CustomError from './_custom_error'

export default class DescriptionError extends CustomError {
  constructor (description, ...params) {
    super(...params)

    this.description = description
  }
}
