'use strict'

const crypto = require('crypto')

const encrypt = (password) => {
  const salt = 'ñlj43h2n$_JHneLI'

  let hash = crypto.createHmac('sha512', salt)
  hash.update(password)
  return hash.digest('hex')
}

module.exports = {
  encrypt
}