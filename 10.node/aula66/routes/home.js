const express = require('express')
const route = express.Router()
const homeControllers = require('../src/controllers/homeControllers')

route.get('/', homeControllers.paginainicial)

module.exports = route