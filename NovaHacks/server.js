const express = require('express')
const upload = require('express-fileupload
const childProcess = require('child_process')
const app = express()
const port = 3000

app.use(upload())

app.use('/static', express.static('/Users/dollarluo/Desktop/3DMODELS'))
App.get('//, (req, res) => {
	res.sendFile(__dirname + '/index.html')
app.get('/hello', function(req, res) {
  const command = "/Users/dollarluo/Desktop/usdpython/stl_to_usdz.sh /Users/dollarluo/Desktop/3DMODELS/ironman.stl /Users/dollarluo/Desktop/3DMODELS/IRONMAN_MASK.usdz"
  childProcess.exec(command, (error) => {
    res.send('test!')
  })
  console.log('hi')
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
