const express = require('express')
const router = express.Router();

// Auth routes
router.get('/', (req, res) => {
    res.send("Hello from Waqhar!")
})

module.exports = router;