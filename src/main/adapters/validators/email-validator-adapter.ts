import validator from 'validator'
import { EmailValidator } from '../../../presentation/protocols/email-validator'

export class EmailValidatorAdapter implements EmailValidator {
  isValid (_email: string): boolean {
    return validator.isEmail(_email)
  }
}
