const express = require('express')
const router = express.Router();

// Auth routes
router.get('/', (res, req) => {
    res.send('Hello from Waqhar')
})

module.exports = router;