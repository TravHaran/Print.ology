const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')

class OctoClient {
  constructor(base, key) {
    this.client = axios.create({
      baseURL: base,
      headers: {'X-Api-Key': key }
    })
  }

  connect() {
    const reqBody = { command: 'connect' }
    return this.client.post('/api/connection', reqBody)
  }

  upload(fileLoc, filepath) {
    const form = new FormData()
    const stats = fs.statSync(filepath)
    const byteLen = stats.size
    // console.log(byteLen)
    form.append('file', fs.createReadStream(filepath))
    const formHeaders = form.getHeaders()
    // console.log('file prepared')
    
    return this.client.post('/api/files/' + fileLoc, form, {
      headers: {
      'Content-Length': byteLen,
        ...formHeaders
      }
    })
  }

  print(path) {
    const data = {
      command: 'slice',
      select: true,
      print: true
    }
    return this.client.post(`/api/files/${path})`, data)
  }
}

module.exports = OctoClient

/*
const apiKey = '804C6CAD83544A1994BC9E1D4EAF4987'
const ip= 'http://192.168.8.218/'
const file = './3DMODELS/ironman.stl'
const fileLoc = 'ironmantest'
const client = new OctoClient(ip, apiKey)
client.connect().then(_ => console.log('done'))
  .then(x => client.upload(fileLoc, file)).then(_ => console.log('done')).catch(console.error)
//  .then(x => client.print(file))*/

