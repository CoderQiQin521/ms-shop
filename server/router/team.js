const express = require('express')
const router = express.Router()

router.get('/team', function (req, res, next) {
  res.end('hello qiqin')
})

router.get('/qiqin', function (req, res, next) {
  res.writeHead(200, { 'Content-Type': 'text/plain;charset=UTF-8' })
  res.end('人生际遇')
})

module.exports = router