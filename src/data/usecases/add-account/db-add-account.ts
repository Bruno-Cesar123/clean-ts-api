import { AddAccount, AddAccountModel, AccountModel, Encrypter, AddAccountRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly _encrypter: Encrypter
  private readonly _addAccountRepository: AddAccountRepository

  constructor (encrypter: Encrypter, addAccountRepository: AddAccountRepository) {
    this._encrypter = encrypter
    this._addAccountRepository = addAccountRepository
  }

  async add (_accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this._encrypter.encrypt(_accountData.password)
    await this._addAccountRepository.add(Object.assign({}, _accountData, { password: hashedPassword }))
    return new Promise(resolve => resolve(null as any))
  }
}
