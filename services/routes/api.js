const { check, validationResult } = require('express-validator');
const express = require("express")
const router = express.Router()

const bcrypt = require('bcrypt')

router.get('/test', function (req, res, next) {
    console.log("Fetch recieved")
    res.json(["hello world"]);
})

router.post('/registeruser', [check('email').isEmail(), check('password').isLength({ min: 8 })], function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        //res.redirect('./register');
        next(500);
    }
    else {
        //const saltRounds = 10
        //const plainPassword = req.body.password
        //bcrypt.hash(plainPassword, saltRounds, function (err, hashedPassword) {
            // // store hashed password
            // console.log("adding user");
            // // saving data in database
            // let sqlquery = "INSERT INTO users (userName, email, hashedPassword) VALUES (?,?,?)"
            // // execute sql query
            // let newrecord = [req.sanitize(req.body.username), req.sanitize(req.body.email), hashedPassword]
            // if (newrecord.includes("")) {
            //     next("There was an error parsing your selected username/password");
            // }
            // db.query(sqlquery, newrecord, (err, result) => {
            //     if (err) {
            //         next(err)
            //     }
            //     else {
            //         res.json(result)
            //     }
            // })
            let sqlquery = "SELECT * FROM users"
            db.query(sqlquery, (err, result) => {
                if (err) {
                    next(err);
                } else {
                    res.json(result);
                }
           // })
        })
    }
})

module.exports = router