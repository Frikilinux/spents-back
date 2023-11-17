import express, { Express } from 'express'
import usersRoutes from '../routes/users'
import spentsRoutes from '../routes/spents'

export class Server {
  port: string | number | undefined
  app: Express

  constructor() {
    this.app = express()
    this.port = process.env.PORT || 3001
    this.middlewares()
    this.routes()
  }

  middlewares = () => {
    this.app.use(express.json())
  }

  listen = () => {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }

  routes = () => {
    this.app.use('/users', usersRoutes)
    this.app.use('/spents', spentsRoutes)
  }
}
