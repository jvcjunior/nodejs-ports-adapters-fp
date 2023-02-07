import slugify from 'slugify'
import * as comment from '@/adapters/use-cases/article/add-comment-to-an-article-adapter'
import * as article from '@/adapters/use-cases/article/register-article-adapter'
import * as user from '@/adapters/use-cases/user/register-user-adapter'

export const outsideRegisterUser: user.OutsideRegisterUserType = async (data) => {
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

export const outsideRegisterArticle: article.OutsideRegisterArticle = async (data) => {
  const date = new Date().toISOString()
  return {
    article: {
      slug: slugify(data.title, { lower: true }),
      title: data.title,
      description: data.description,
      body: data.body,
      tagList: data.tagList ?? [],
      createdAt: date,
      updatedAt: date,
      favorited: false,
      favoritesCount: 0,
      // author: null,
    },
  }
}

export const outsideCreateComment: comment.OutsideCreateComment = async (data) => {
  const date = new Date().toISOString()

  return {
    comment: {
      id: Date.now(),
      createdAt: date,
      updatedAt: date,
      body: data.body,
      // authorId: data.authorId,
      // articleId: '',
    },
  }
}
