const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index')
})

router.post('/', (req, res, next) => {
  res.render('index', { multiplied: req.multiplied })
})

module.exports = router
