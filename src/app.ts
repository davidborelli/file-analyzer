import express from 'express'
import { createServer } from 'http'
import routes from '@/interface/routes'

const app = express()
const httpServer = createServer(app)

app.use(express.json())
app.use(routes)

const PORT = 3000

httpServer.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`)
})
