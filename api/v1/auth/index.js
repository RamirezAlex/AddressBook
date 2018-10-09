'use strict'

const { Router } = require('express')
const Auth = require('./auth')

const router = new Router()

router.post('/', Auth.login)
router.get('/:uuid', Auth.logout)

module.exports = router
