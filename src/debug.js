const os = require('os')

let address
require('dns').lookup(os.hostname(), function (err, add, fam) {
  address = add
})

module.exports = (req, res, next) => {
  req.info = `${address}: ${req.path} (${os.hostname()})`
  next()
}