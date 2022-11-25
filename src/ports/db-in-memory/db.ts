import { OutsideRegisterUserType } from '@/adapters/use-cases/user/register-user-adapter'

export const outsideRegister: OutsideRegisterUserType = async (data) => {
  return {
    user: {
      username: data.username,
      token: '',
      email: data.email,
      bio: '',
      image: undefined,
    },
  }
}
