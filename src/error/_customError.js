export default class CustomError extends Error {
  constructor (...params) {
    super(...params)
    this.name = this.constructor.name
  }
}
