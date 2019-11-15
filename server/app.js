const express = require('express')
const app = express()

const goodsRouter = require('./router/goods')
const teamRouter = require('./router/team')

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept')
  res.header('Access-Control-Allow-Methods', 'POST,GET,DELETE,PUT,OPTIONS')
  res.header('X-Powered-By', '3.2.1')
  res.header('Content-Type', 'application/json;charset=UTF-8')
  next()
})

app.use(goodsRouter)
app.use(teamRouter)

app.listen(3000, function () {
  console.log(`接口已启动,请访问3000端口`);
})