const express = require('express')
const router = require('./router')
const cors = require('cors')
const errorHandler = require('./middleware/error-handler')

const app = express()

app.use(cors())
app.use('/api', router)

app.use(errorHandler())

app.listen(8888, () => {
  console.log('server is running successful!')
})
