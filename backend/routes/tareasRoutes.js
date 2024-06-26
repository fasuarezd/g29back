const express = require('express')
const router = express.Router()
const { getTareas } = require('../controllers/tareasControllers')

router.get('/', getTareas)

module.exports = router