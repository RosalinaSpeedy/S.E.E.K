const express = require("express")
const router = express.Router()

router.get('/test', function (req, res, next) {
    res.send("Express app created successfully");
})

module.exports = router