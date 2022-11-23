import express from 'express'

console.log("hi")

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')

  console.log("request: ip", req.ip)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})