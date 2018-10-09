'use strict'

const express = require('express')
const api = express.Router()

const User = require('./api/v1/user')
const Auth = require('./api/v1/auth')
const Contact = require('./api/v1/contact')

api.use('/user', User)
api.use('/auth', Auth)
api.use('/contact', Contact)

api.get('/', (req, res) => {
  res.send({
    message: 'AddressBook API'
  })
})

module.exports = api
