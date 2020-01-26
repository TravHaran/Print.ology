const childProcess = require('child_process')
const fs = require('fs')
const path = require('path')

const scriptPath = "/Users/dollarluo/Desktop/usdpython/stl_to_usdz.sh"
const modelFolder = path.resolve(__dirname, "./3DMODELS")

fs.readdir(modelFolder, (err, files) => {
  files.forEach(file => {
    if (path.extname(file) === '.stl') {
      const basename = path.basename(file, '.stl')
      const command = `${scriptPath} ${modelFolder}/${file} ${modelFolder}/${basename}.usdz`
      childProcess.exec(command, (error) => {
        if (error) {
          // console.log(error)
        }
      })
    }
  })
})
