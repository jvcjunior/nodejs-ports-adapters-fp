import { OutsideRegisterArticleType } from '@/adapters/use-cases/article/register-article-adapter'
import { OutsideRegisterUserType } from '@/adapters/use-cases/user/register-user-adapter'
import slugify from 'slugify'

export const outsideRegisterUser: OutsideRegisterUserType = async (data) => {
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

export const outsideRegisterArticle: OutsideRegisterArticleType = async (data) => {
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
