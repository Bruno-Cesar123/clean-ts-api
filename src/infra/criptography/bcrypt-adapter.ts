import bcrypt from 'bcrypt'
import { Hasher } from '../../data/protocols/criptograpy/hasher'

export class BcryptAdapter implements Hasher {
  private readonly _salt: number

  constructor (salt: number) {
    this._salt = salt
  }

  async hash (_value: string): Promise<string> {
    const hash = await bcrypt.hash(_value, 12)
    return hash
  }
}
