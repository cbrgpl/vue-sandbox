import CustomError from './_customError'

export default class DescriptionError extends CustomError {
  constructor (description, ...params) {
    super(...params)

    this.description = description
  }
}
