const express = require('express')
const courseRoutes = require('./courseRoutes')
const studentRoutes = require('./studentRoutes')
const transactionRoutes = require('./transactionRoutes')
const endCourseRoutes = require('./endCourseRoutes')

const router = express.Router()

courseRoutes(router)
studentRoutes(router)
transactionRoutes(router)
endCourseRoutes(router)

module.exports = router
