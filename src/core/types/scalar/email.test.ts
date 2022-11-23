import { emailCodec } from './email'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'

it('should validate email correctly', () => {
  pipe(
    'john@doe.com',
    emailCodec.decode,
    E.map((result) => expect(result).toBe('john@doe.com')),
  )
})

it('should return error when email invalid', () => {
  pipe(
    'invalid-email',
    emailCodec.decode,
    E.mapLeft((error) => expect(error[0]?.message).toBe('Invalid email')),
  )
})
