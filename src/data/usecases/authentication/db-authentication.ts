import { Authentication, AuthenticationModel } from '../../../domain/usecases/autentication'
import { HashComparer } from '../../protocols/criptograpy/hash-comparer'
import { TokenGenerator } from '../../protocols/criptograpy/token-generator'
import { LoadAccountByEmailRepository } from '../../protocols/db/load-account-by-email-repository'

export class DbAuthentication implements Authentication {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
  private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
  private readonly hashComparer: HashComparer
  private readonly tokenGenerator: TokenGenerator

  constructor (
    loadAccountByEmailRepository: LoadAccountByEmailRepository,
    hashComparer: HashComparer,
    tokenGenerator: TokenGenerator
  ) {
    this.loadAccountByEmailRepository = loadAccountByEmailRepository
    this.hashComparer = hashComparer
    this.tokenGenerator = tokenGenerator
  }

  async auth (authentication: AuthenticationModel): Promise<string> {
    const account = await this.loadAccountByEmailRepository.load(authentication.email)
    if (account) {
      await this.hashComparer.compare(authentication.password, account.password)
      await this.tokenGenerator.generate(account.id)
    }

    return null as any
  }
}
