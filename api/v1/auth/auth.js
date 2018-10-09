'use strict'

const login = (req, res) => {
  res.status(200).send({
    message: 'User logged in'
  })
}

const logout = (req, res) => {
  res.status(200).send({
    message: 'User logout'
  })
}

module.exports = {
  login,
  logout
}
