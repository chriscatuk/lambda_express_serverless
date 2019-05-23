const express = require('express')
const sls = require('serverless-http')
const app = express()
app.get('/', async (req, res, next) => {
  res.status(200).send('Hello World!')
})
app.get('/test/', async (req, res, next) => {
  res.status(200).send('Hello Test!')
})
module.exports.server = sls(app)