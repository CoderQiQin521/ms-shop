const express = require('express')
const router = express.Router()

router.get('/team', function (req, res, next) {
  res.end('hello qiqin')
})

module.exports = router