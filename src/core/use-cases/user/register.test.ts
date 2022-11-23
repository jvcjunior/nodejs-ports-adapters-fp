import { pipe } from 'fp-ts/function'
import { register, OutsideRegister } from './register'
import { CreateUser } from '@/core/types/user'
import { unsafeEmail, unsafe, mapAll } from '@/config/tests/fixtures'

const registerOk: OutsideRegister<string> = async (data) => {
  return `User ${data.username} registered with success!`
}

// const registerFail: OutsideRegister<string> = async (data) => {
//   throw new Error('Error!')
// }

const data: CreateUser = {
  username: unsafe('john'),
  email: unsafeEmail('laris@laris.com'),
  password: 'john123',
}

it('should register user with success', async () => {
  return pipe(
    data,
    // register(registerFail),
    register(registerOk),
    // TE.map(result => expect(result).toBe(`User ${data.username} registered with success!`)),
    mapAll(result => expect(result).toBe(`User ${data.username} registered with success!`)),
  )()
})
