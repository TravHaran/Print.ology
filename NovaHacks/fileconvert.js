const childProcess = require('child_process')
const StlThumbnailer = require('node-stl-to-thumbnail');
const fs = require('fs')
const path = require('path')

const scriptPath = "/Users/dollarluo/Desktop/usdpython/stl_to_usdz.sh"
const modelFolder = path.resolve(__dirname, "./3DMODELS")

const thumbnailer = new StlThumbnailer({
  filePath: __dirname + "/3DMODELS",
  requestThumbnails: [
    {
      width: 500,
      height: 500
    }
  ]
})


fs.readdir(modelFolder, (err, files) => {
  files.forEach(file => {
    if (path.extname(file) === '.stl') {

      const basename = path.basename(file, '.stl')
      const command = `${scriptPath} ${modelFolder}/${file} ${modelFolder}/${basename}.usdz`
          .then(function(thumbnails){
            // thumbnails is an array (in matching order to your requests) of Canvas objects
            // you can write them to disk, return them to web users, etc
            // see node-canvas documentation at https://github.com/Automattic/node-canvas
            thumbnails[0].toBuffer(function(err, buf){
              fs.writeFileSync(__dirname + `${scriptPath} ${modelFolder}/${file} ${modelFolder}/${basename}.png`, buf);
            })
      childProcess.exec(command, (error) => {
        if (error) {
          // console.log(error)
        }
      })
    })
  }
})})