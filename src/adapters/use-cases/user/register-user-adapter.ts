import { registerUser, RegisterUser, OutsideRegisterUser } from '@/core/use-cases/user/register-user'
import { User } from '@/core/types/user'

export type OutsideRegisterUserType = OutsideRegisterUser<{
    user: User
}>

export const register: RegisterUser = (outsideRegister) => (data) => registerUser(outsideRegister)(data)
