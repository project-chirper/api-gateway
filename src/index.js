const express = require('express')
const cors = require('cors')
const auth = require('chirper-auth-middleware')

// Express app
const app = express()

// Middlewares
app.use(require('./debug')) // debugging
app.use(cors())

// Debug Route
app.get('/', auth({ required: true }), (req, res) => {
  return res.send(`I am alive, friend.\n${req.info}`).end()
})

// Proxies
app.use('/api', require('./proxies'))

// listen
app.listen(process.env.PORT, console.log(`Listening on port ${process.env.PORT}`))