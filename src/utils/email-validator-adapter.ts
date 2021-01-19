import { EmailValidator } from '../presentation/protocols/email-validator'
import validator from 'validator'

export class EmailValidatorAdapter implements EmailValidator {
  isValid (_email: string): boolean {
    return validator.isEmail(_email)
  }
}
