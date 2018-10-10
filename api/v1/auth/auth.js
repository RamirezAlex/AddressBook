'use strict'

const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { encrypt } = require('../user/userHelper')
const User = require('../user/userModel')

const login = (req, res) => {
  const { email, password } = req.body

  User.find({ email: email })
    .exec()
    .then(user => {
      if (user.length < 1 || user[0].email !== email || user[0].password !== encrypt(password)) {
        return res.status(401).send({
          message: 'Unauthorized'
        })
      }

      const token = jwt.sign(
        {
          userId: user._id,
          email: user.email
        },
        process.env.JWT_KEY,
        {
          expiresIn: '1h'
        }
      )

      return res.status(200).send({
        message: 'User logged in',
        token
      })
    })
    .catch(error => {
      return res.status(401).send({
        message: 'Unauthorized'
      })
    })
}

module.exports = {
  login
}
