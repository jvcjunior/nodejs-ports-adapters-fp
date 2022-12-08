import express, { Request, Response } from 'express'
import { pipe } from 'fp-ts/function'
import * as TE from 'fp-ts/TaskEither'
import { registerUser } from '@/adapters/use-cases/user/register-user-adapter'
import { registerArticle } from '@/adapters/use-cases/article/register-article-adapter'
import { createUserInDb, createArticleInDb } from '@/adapters/ports/db'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/api/users', async (req: Request, res: Response) => {
  await pipe(
    req.body.user,
    registerUser(createUserInDb),
    TE.map((result) => res.json(result)),
    TE.mapLeft((error) => res.status(400).json(getError(error.message))),
  )()
})

app.post('/api/articles', async (req: Request, res: Response) => {
  await pipe(
    req.body.article,
    registerArticle(createArticleInDb),
    TE.map((result) => res.json(result)),
    TE.mapLeft((error) => res.status(400).json(getError(error.message))),
  )()
})

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})

function getError (errors: string) {
  return {
    errors: {
      body: errors.split(':::'),
    },
  }
}
