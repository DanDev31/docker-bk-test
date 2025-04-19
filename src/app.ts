import express from 'express'
import cors from 'cors'
import routes from './routes'


const app = express()

app.use(express.json())
app.use(cors({
    origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true
}))


app.use('/api/v1', routes)

export default app