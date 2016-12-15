const express = require('express')
const router = express.Router()

const jumonController = require('../controllers/jumon')

/* GET jumon(s) listing. */
router.get('/', (req, res, next) => {
  // TODO: Validation
  jumonController.search(req, res)
})

module.exports = router
