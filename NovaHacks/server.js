const express = require('express')
const childProcess = require('child_process')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 3000

const modelFolder = path.resolve(__dirname, './3DMODELS')

app.get('/usdz', function (req, res) {
  fs.readdir(modelFolder, (err, files) => {
    const usdzOnly = files.filter(x => path.extname(x) === '.usdz')
    res.json(usdzOnly)
  })
})
app.use('/static', express.static(modelFolder))

app.get('/hello', function(req, res) {
  const command = "/Users/dollarluo/Desktop/usdpython/stl_to_usdz.sh /Users/dollarluo/Desktop/3DMODELS/ironman.stl /Users/dollarluo/Desktop/3DMODELS/IRONMAN_MASK.usdz"
  childProcess.exec(command, (error) => {
    res.send('test!')
  })
  console.log('hi')
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
