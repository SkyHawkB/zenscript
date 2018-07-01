const eval_file = (() => {
   "use strict"

   const fs = require('fs')
   const path = require('path')

   return (source) => {
      if (path.extname(source) !== '.js') {
         return console.log('filename: "' + source + '" does not have .js extension')
      }
      fs.readFile(source, 'utf8', (err, data) => {
         if (err) {
            return console.log(err)
         }

         console.log(eval(data))
      })
   }
})()

if (process.argv.length != 3) {
   return console.log('Please specify file')
}

eval_file(process.argv[2])
