'use strict'

const { Router } = require('express')
const Contact = require('./contact')

const router = new Router()

router.post('/', Contact.create)

module.exports = router
