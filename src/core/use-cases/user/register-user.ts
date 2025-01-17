import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { CreateUser, createUserCodec } from '@/core/types/user'
import { validateCodec } from '@/helpers/validate-codec'

export type OutsideRegisterUser<A> = (data: CreateUser) => Promise<A>;

export type RegisterUser = <A>(outsideRegister: OutsideRegisterUser<A>) =>
    (data: CreateUser) => TE.TaskEither<Error, A>

export const registerUser: RegisterUser = (outsideRegister) => (data) => {
  return pipe(
    data,
    validateCodec(createUserCodec),
    TE.fromEither,
    TE.chain(() => TE.tryCatch(
      () => outsideRegister(data),
      E.toError,
    )),
  )
}
