import { outsideRegisterUser, outsideRegisterArticle, outsideCreateComment } from '@/ports/db-in-memory/db'
import { OutsideRegisterUserType } from '@/adapters/use-cases/user/register-user-adapter'
import { OutsideRegisterArticleType } from '@/adapters/use-cases/article/register-article-adapter'
import { OutsideCreateCommentType } from '@/adapters/use-cases/article/add-comment-to-an-article-adapter'

export const createUserInDb: OutsideRegisterUserType = (data) => {
  return outsideRegisterUser(data)
}

export const createArticleInDb: OutsideRegisterArticleType = (data) => {
  return outsideRegisterArticle(data)
}

export const addCommentToAnArticleInDb: OutsideCreateCommentType = (data) => {
  return outsideCreateComment(data)
}
