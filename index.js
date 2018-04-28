import express from 'express'
import bodyParser from 'body-parser'
import {} from 'dotenv/config'

const app = express()
const router = express.Router()

//populate the req.body property with the parsed body
app.use(bodyParser())


// expose the server to supertest
app.listen(process.env.PORT || 9000, () => {
  console.log('app is listening at port 9000')
})

export default app
