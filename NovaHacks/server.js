const express = require('express')
const childProcess = require('child_process')
const path = require('path')
const fs = require('fs')

const apiKey = '804C6CAD83544A1994BC9E1D4EAF4987'
const ip= 'http://172.20.10.10'

const OctoClient = require('./octo')
const octo = new OctoClient(ip, apiKey)

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
app.post('/print/:target', function (req, res) {
  const target = req.params['target']
  const filePath = path.resolve(modelFolder, target)
  octo.connect()
    .then(_ => octo.upload(target, filePath))
    .then(_ => octo.print(target))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
