import { registerArticle as registerArticleCore, RegisterArticle, OutsideRegisterArticle } from '@/core/use-cases/article/register-article'
import { ArticleOutput } from '@/core/types/article'

export type OutsideRegisterArticleType = OutsideRegisterArticle<{
    article: ArticleOutput
}>

export const registerArticle: RegisterArticle = (outsideRegister) => (data) => registerArticleCore(outsideRegister)(data)
