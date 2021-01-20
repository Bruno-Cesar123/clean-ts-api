import bcrypt from 'bcrypt'
import { Encrypter } from '../../data/protocols/encrypter'

export class BcryptAdapter implements Encrypter {
  private readonly _salt: number

  constructor (salt: number) {
    this._salt = salt
  }

  async encrypt (_value: string): Promise<string> {
    await bcrypt.hash(_value, 12)
    return null as any
  }
}
