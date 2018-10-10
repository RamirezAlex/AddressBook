'use strict'

const { firebaseRef } = require('../../../dbhandler')

const create = (req, res) => {
  const { userId, name, phone, address, email } = req.body

  firebaseRef.push({
    userId,
    name,
    phone,
    email,
    address
  }, (error) => {
    if (error) { 
      return res.status(500).send({ 
        message: 'Internal server error',
        error
      })
    }

    res.status(201).send({
      message: 'Contact created successfully',
    })
  })
} 

module.exports = {
  create
}
