const express = require('express')
const courseRoutes = require('./courseRoutes')
const studentRoutes = require('./studentRoutes')
const transactionRoutes = require('./transactionRoutes')
const endCourseRoutes = require('./endCourseRoutes')
const adminRoutes = require('./adminRoutes')

const router = express.Router()

courseRoutes(router)
studentRoutes(router)
transactionRoutes(router)
endCourseRoutes(router)
adminRoutes(router)

module.exports = router
