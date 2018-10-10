'use strict'

const login = (req, res) => {
  const { email, password } = req.body

  res.status(200).send({
    message: 'User logged in'
  })
}

const logout = (req, res) => {
  const { email } = req.params

  res.status(200).send({
    message: 'User logout'
  })
}

module.exports = {
  login,
  logout
}
