import { AddAccount, AddAccountModel, AccountModel, Hasher, AddAccountRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly _hasher: Hasher
  private readonly _addAccountRepository: AddAccountRepository

  constructor (encrypter: Hasher, addAccountRepository: AddAccountRepository) {
    this._hasher = encrypter
    this._addAccountRepository = addAccountRepository
  }

  async add (_accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this._hasher.hash(_accountData.password)
    const account = await this._addAccountRepository.add(Object.assign({}, _accountData, { password: hashedPassword }))
    return account
  }
}
