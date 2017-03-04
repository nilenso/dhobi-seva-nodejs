const express = require('express')
const courseRoutes = require('./courseRoutes')
const studentRoutes = require('./studentRoutes')
const transactionRoutes = require('./transactionRoutes')

const router = express.Router()

courseRoutes(router)
studentRoutes(router)
transactionRoutes(router)

module.exports = router
