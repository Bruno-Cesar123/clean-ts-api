import { InvalidParamError, MissingParamError } from '../../errors'
import { badRequest, serverError, unauthorized } from '../../helpers/http-helper'
import { Controller, EmailValidator, HttpRequest, HttpResponse, Authentication } from './login-protocols'

export class LoginController implements Controller {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
  private readonly emailValidator: EmailValidator
  // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
  private readonly authentication: Authentication

  constructor (emailValidator: EmailValidator, authentication: Authentication) {
    this.emailValidator = emailValidator
    this.authentication = authentication
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
  async handle (httpRequest: HttpRequest): Promise<HttpResponse | any> {
    const requiredFiels = ['email', 'password']
    for (const field of requiredFiels) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    try {
      const { email, password } = httpRequest.body
      if (!email) {
        return badRequest(new MissingParamError('email'))
      }
      if (!password) {
        return badRequest(new MissingParamError('password'))
      }
      const isValid = this.emailValidator.isValid(email)

      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      const accessToken = await this.authentication.auth(email, password)
      if (!accessToken) {
        return unauthorized()
      }
    } catch (error) {
      return serverError(error)
    }
  }
}
