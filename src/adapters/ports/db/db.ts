import * as db from '@/ports/db-in-memory/db'
import * as user from '@/adapters/use-cases/user/register-user-adapter'
import * as article from '@/adapters/use-cases/article/register-article-adapter'
import * as comment from '@/adapters/use-cases/article/add-comment-to-an-article-adapter'

export const createUserInDb: user.OutsideRegisterUserType = (data) => {
  return db.outsideRegisterUser(data)
}

export const createArticleInDb: article.OutsideRegisterArticle = (data) => {
  return db.outsideRegisterArticle(data)
}

export const addCommentToAnArticleInDb: comment.OutsideCreateComment = (data) => {
  return db.outsideCreateComment(data)
}
