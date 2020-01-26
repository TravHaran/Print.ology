const StlThumbnailer = require('node-stl-to-thumbnail')
const path = require('path')
const fs = require('fs')

const size = { width: 500, height: 500 }
const modelFolder = path.resolve(__dirname, './3DMODELS')

fs.readdir(modelFolder, (err, files) => {
  files.forEach(file => {
    if (path.extname(file) === '.stl') {
      const basename = path.basename(file, '.stl')
      const thumbnailname = path.resolve(modelFolder, basename + '.png')
      const thumbnailer = new StlThumbnailer({
        filePath: path.resolve(modelFolder, file),
        requestThumbnails: [ size ]
      }).then(thumbnails => {
        thumbnails[0].toBuffer((err, buf) => {
          fs.writeFileSync(thumbnailname, buf)
        })
      })
    }
  })
})
