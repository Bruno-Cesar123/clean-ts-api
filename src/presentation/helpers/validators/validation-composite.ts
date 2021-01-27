import { Validation } from '../../protocols/validation'

export class ValidationComposite implements Validation {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
  private readonly validations: Validation[]

  // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
  constructor (validations: Validation[]) {
    this.validations = validations
  }

  validate (input: any): Error | any {
    for (const validation of this.validations) {
      const error = validation.validate(input)
      if (error) {
        return error
      }
    }
  }
}
