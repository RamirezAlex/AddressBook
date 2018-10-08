'use strict'

const express = require('express')
const api = express.Router()

const User = require('./api/v1/user/user')

api.get('/', (req, res) => {
  res.send({
    message: 'AddressBook API'
  })
})

api.get('/user', User.register)

module.exports = api

