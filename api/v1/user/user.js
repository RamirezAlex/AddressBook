'use strict'

const register = (req, res) => {
  return res.status(200).send({
    message: 'User created'
  })
}

module.exports = {
  register
}
