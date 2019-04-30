const express = require('express')
const proxy = require('http-proxy-middleware')
const auth = require('auth-middleware')

// Express app
const app = express()

// Middlewares
app.use(require('./debug')) // debugging

// Debug Route
app.get('/', auth({ required: true }), (req, res) => {
  return res.send(`I am alive, friend.\n${req.info}`).end()
})

// Proxies

app.use( // user-service
  '/user',
  proxy({ target: 'http://user-service:3002' })
)

// listen
app.listen(process.env.PORT, console.log(`Listening on port ${process.env.PORT}`))