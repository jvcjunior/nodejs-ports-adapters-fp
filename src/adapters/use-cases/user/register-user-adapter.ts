import { registerUser as registerUserCore, RegisterUser, OutsideRegisterUser } from '@/core/use-cases/user/register-user'
import { User } from '@/core/types/user'

export type OutsideRegisterUserType = OutsideRegisterUser<{
    user: User
}>

export const registerUser: RegisterUser = (outsideRegister) => (data) => registerUserCore(outsideRegister)(data)
