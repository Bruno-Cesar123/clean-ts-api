import bcrypt from 'bcrypt'
import { HashComparer } from '../../../data/protocols/criptograpy/hash-comparer'
import { Hasher } from '../../../data/protocols/criptograpy/hasher'

export class BcryptAdapter implements Hasher, HashComparer {
  constructor (private readonly salt: number) {}

  async hash (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
  async compare (value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}
