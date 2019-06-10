const proxy = require('http-proxy-middleware')

const router = require('express').Router()

router.use( // user-service
  '/user',
  proxy({ 
    target: 'http://user-service:3002',
    pathRewrite: { '^/api' : '' }
  })
)

router.use( // post-service
  '/post',
  proxy({ 
    target: 'http://post-service:3003',
    pathRewrite: { '^/api' : '' }
  })
)

module.exports = router