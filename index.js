import express from 'express'

const app = express()

// expose the server to supertest
app.listen(9000, () => {
  console.log('app is listening at port 9000')
})

export default app;
