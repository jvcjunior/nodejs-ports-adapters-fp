import { outsideRegisterUser, outsideRegisterArticle } from '@/ports/db-in-memory/db'
import { OutsideRegisterUserType } from '@/adapters/use-cases/user/register-user-adapter'
import { OutsideRegisterArticleType } from '@/adapters/use-cases/article/register-article-adapter'

export const createUserInDb: OutsideRegisterUserType = (data) => {
  return outsideRegisterUser(data)
}

export const createArticleInDb: OutsideRegisterArticleType = (data) => {
  return outsideRegisterArticle(data)
}
