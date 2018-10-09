'use strict'

const create = (req, res) => {
  return res.status(200).send({
    message: 'Contact created'
  })
} 

const getContactByUserID = (req, res) => {
  return res.status(200).send({})
}

module.exports = {
  create,
  getContactByUserID
}
