'use strict'

const mongoose = require('mongoose')
const { encrypt } = require('./userHelper')
const User = require('./userModel')

const register = (req, res) => {
  const { email, password } = req.body

  const user = new User({
    _id: mongoose.Types.ObjectId(),
    email,
    password: encrypt(password)
  })

  user.save()
    .then(result => {
      return res.status(201).send({
        message: `User ${email} has been created`,
        user: {
          _id: user._id,
          email
        }
      })
    })
    .catch(error => {
      return res.status(500).send({
        message: 'Internal server error',
        error: error.message
      })
    })
}

module.exports = {
  register
}
