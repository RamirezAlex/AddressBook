'use strict'

const { Router } = require('express')
const User = require('./user')

const router = new Router()

router.post('/', User.register)

module.exports = router
