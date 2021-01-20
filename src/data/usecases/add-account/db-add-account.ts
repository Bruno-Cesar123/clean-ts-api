import { AddAccount, AddAccountModel, AccountModel, Encrypter } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly _encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this._encrypter = encrypter
  }

  async add (_account: AddAccountModel): Promise<AccountModel> {
    await this._encrypter.encrypt(_account.password)
    return new Promise(resolve => resolve(null as any))
  }
}
