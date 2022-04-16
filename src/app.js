const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  const { sayHello } = require('./services/sayHello')

  res.send(sayHello('Mari'))
})

module.exports = {
  app
}
