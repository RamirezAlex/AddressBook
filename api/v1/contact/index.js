'use strict'

const { Router } = require('express')
const Contact = require('./contact')

const router = new Router()

router.post('/', Contact.create)
router.get('/:userId', Contact.getContactByUserID)

module.exports = router
