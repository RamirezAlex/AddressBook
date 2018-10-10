'use strict'

require('dotenv').config()
const mongoose = require('mongoose')
const firebase = require('firebase')

const mongoUser = process.env.MONGO_USER
const mongoPassword = process.env.MONGO_PASSWD
const mongoHost = process.env.MONGO_HOST

const firebaseHost = process.env.FIREBASE_HOST

mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPassword}@${mongoHost}/test?retryWrites=true`, {
  useNewUrlParser: true
})

firebase.initializeApp({
  databaseURL: firebaseHost
})
const firebaseRef = firebase.database().ref('contacts')

module.exports = {
  mongoose,
  firebaseRef
}