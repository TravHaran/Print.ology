const express = require('express')
const app = express()
const port = 3000

app.get('/hello', function(req, res) {
  res.send('test!')
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))