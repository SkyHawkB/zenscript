const run_zen = require('../src/compiler.js');

if (process.argv.length != 3) {
   console.log('Please specify source file')
} else {
   run_zen(process.argv[2], false)
}
