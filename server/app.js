const express = require('express')
const app = express()

const goodsRouter = require('./router/goods')
const teamRouter = require('./router/team')

app.use(goodsRouter)
app.use(teamRouter)

app.listen(3000, function () {
  console.log(`接口已启动,请访问3000端口`);
})