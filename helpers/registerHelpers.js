const crypto = require('crypto')

function randomKey() {
  var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var length = 7
  var result = ''
  
  for (let i = length; i > 0; --i) {
    result += chars[Math.round(Math.random() * (chars.length - 1))]
  }
  return result
}

function hash(data, key) {
  const hash = crypto.createHmac('sha256', key)
                     .update(data)
                     .digest('hex')
  return hash
}

module.exports = {
  randomKey,
  hash
}