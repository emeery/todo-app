const express = require('express')

const router = express.Router()
router.post('',  async(req, res) => {
    try {
      console.log(process.env.MONGO_ATLAS)
        res.send('task router')
    } catch (e) { res.status(400).send(e) }
});
module.exports = router
