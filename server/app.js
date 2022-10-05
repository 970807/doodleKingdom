const express = require('express')
const router = require('./router')
const cors = require('cors')
const errorHandler = require('./middleware/error-handler')

const app = express()

app.use(cors())

app.use(express.static('public'))
app.use(express.static('public/build'))

app.use('/api', router)

app.use(errorHandler())

app.listen(8022, () => {
  console.log('server is running successful!')
})
