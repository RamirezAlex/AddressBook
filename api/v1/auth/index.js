'use strict'

const { Router } = require('express')
const Auth = require('./auth')

const router = new Router()

router.post('/', Auth.login)

module.exports = router
