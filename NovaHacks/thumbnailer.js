const StlThumbnailer = require('node-stl-to-thumbnail')
const path = require('path')
const fs = require('fs')

const size = { width: 250, height: 250 }
const modelFolder = path.resolve(__dirname, './3DMODELS')
const stlfile = path.resolve(modelFolder, 'ironman.stl')
const thumbnail = path.resolve(modelFolder, 'ironman.png')

const thumbnailer = new StlThumbnailer({
  filePath: stlfile,
  requestThumbnails: [ size ]
}).then(thumbnails => {
  thumbnails[0].toBuffer((err, buf) => {
    fs.writeFileSync(thumbnail, buf)
  })
})
