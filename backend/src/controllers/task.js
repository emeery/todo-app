const express = require('express')
const router = express.Router()
// API Tarea
router.post('',  async(req, res) => {
    try {
      
        res.send('task router')
    } catch (e) { res.status(400).send(e) }
});
module.exports = router
