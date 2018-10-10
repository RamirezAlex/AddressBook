'use strict'

const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const api = require('./api')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api/v1', api)

const server = http.createServer(app)

const port = process.env.PORT || 3000

server.listen(port, () => console.log(`AddressBook app is runing on http://localhost:${port}/`))
