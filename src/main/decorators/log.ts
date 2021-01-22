import { LogErrorRepository } from '../../data/protocols/log-error-reposity'
import { Controller, HttpRequest, HttpResponse } from '../../presentation/protocols'

export class LogControllerDecorator implements Controller {
  private readonly _controller: Controller
  private readonly _logErrorRepository: LogErrorRepository

  constructor (controller: Controller, logErrorRepository: LogErrorRepository) {
    this._controller = controller
    this._logErrorRepository = logErrorRepository
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this._controller.handle(httpRequest)
    if (httpResponse.statusCode === 500) {
      await this._logErrorRepository.log(httpResponse.body.stack)
    }
    return httpResponse
  }
}
