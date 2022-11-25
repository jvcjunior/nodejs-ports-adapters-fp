import { outsideRegister } from '@/ports/db-in-memory/db'
import { OutsideRegisterUserType } from '@/adapters/use-cases/user/register-user-adapter'

export const userRegister: OutsideRegisterUserType = (data) => {
  return outsideRegister(data)
}
