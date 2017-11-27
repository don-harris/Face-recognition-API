const express = require('express')
const request = require('superagent')
const bodyParser = require('body-parser')

const router = express.Router()

router.use(bodyParser.json())

router.get('/25544', (req, res) => {
  request
    .get('https://api.wheretheiss.at/v1/satellites/25544')
    .end((err, result) => {
      if (err) {
        console.log(result)
        res.status(500).send(err.message)
      } else {
        res.json(result.body.data.children)
      }
    })
})

module.exports = router
