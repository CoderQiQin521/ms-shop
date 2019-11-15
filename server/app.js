const express = require('express')
const app = express()
const router = express.Router()
const goodsData = require('./mock/good.json')

router.get('/goods', function (req, res, next) {
  res.json(goodsData)
})

app.use(router)

app.listen(3000, function () {
  console.log(`接口已启动,请访问3000端口`);

})