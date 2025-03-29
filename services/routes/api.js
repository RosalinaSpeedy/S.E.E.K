const { check, validationResult } = require('express-validator');
const express = require("express")
const router = express.Router()

const bcrypt = require('bcrypt')

router.get('/test', function (req, res, next) {
    console.log("Fetch recieved")
    res.json(["hello world"]);
})

router.get('/getposts', function (req, res, next) {
    console.log("Fetch posts")
    const sqlquery = `SELECT * FROM forumposts`
    db.query(sqlquery, (err, result) => {
        if (err) {
            next(err)
        }
        else {
            const sqlquery2 = `SELECT username FROM users WHERE id=${result.userid}`
            db.query(sqlquery2, (err, result2) => {
                if (err) {
                    next(err)
                }
                else {
                    result.username = result2.username;
                    console.log(result);
                    res.json(result)
                }
            })
        }
    })
})

router.post('/addpost', [check('text').not().isEmpty()], function (req, res, next) {
    console.log("adding post")
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        //res.redirect('./register');
        console.log(errors);
        next(500);
    }
    else {
        console.log(req.body)
            let sqlquery = "INSERT INTO forumposts (title, body, created, edited, userId) VALUES (?,?,NOW(),NOW(),?)"
            // execute sql query
            let newrecord = [req.sanitize(req.body.title), req.sanitize(req.body.text), req.body.userId]
            if (newrecord.includes("")) {
                next("There was an error parsing your post input");
            }
            db.query(sqlquery, newrecord, (err, result) => {
                if (err) {
                    next(err)
                }
                else {
                    res.json(result)
                }
            })
    }
})

router.post('/registeruser', [check('email').isEmail(), check('username').not().isEmpty(), check('password').isLength({ min: 8 })], function (req, res, next) {
    console.log()
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        //res.redirect('./register');
        console.log(errors);
        next(500);
    }
    else {
        console.log(req.body)
        const saltRounds = 10
        const plainPassword = req.body.password
        bcrypt.hash(plainPassword, saltRounds, function (err, hashedPassword) {
            // store hashed password
            console.log("adding user");
            // saving data in database
            let sqlquery = "INSERT INTO users (userName, email, hashedPassword) VALUES (?,?,?)"
            // execute sql query
            let newrecord = [req.sanitize(req.body.username), req.sanitize(req.body.email), hashedPassword]
            if (newrecord.includes("")) {
                next("There was an error parsing your selected username/password");
            }
            db.query(sqlquery, newrecord, (err, result) => {
                if (err) {
                    next(err)
                }
                else {
                    res.json(result)
                }
            })
            // let sqlquery = "SELECT * FROM users"
            // db.query(sqlquery, (err, result) => {
            //     if (err) {
            //         next(err);
            //     } else {
            //         res.json(result);
            //     }
            //})
        })
    }
})

router.post('/login', function (req, res, next) {
    console.log(req.body)
    let sqlquery = `SELECT hashedPassword FROM users WHERE email="${req.sanitize(req.body.email)}"`
    console.log(sqlquery);
    let user = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }
    // execute sql query
    db.query(sqlquery, (err, result) => {
        console.log(result)
        if (err) {
            next(err)
        }
        if (result.length > 0) {
            var hashedPassword = result[0].hashedPassword;
        } else {
            res.json(null);
        }
        console.log(hashedPassword);
        bcrypt.compare(req.sanitize(req.body.password), hashedPassword, function (err, result) {
            if (err) {
                next(err)
            } else if (result == true) {
                let idQuery = `SELECT id, username FROM users WHERE email="${req.body.email}"`;
                db.query(idQuery, (err, result1) => {
                    if (err) {
                        next(err)
                    }
                    else if (result1.length == 1) {
                        user.id = result1[0].id;
                        user.username = result1[0].username;
                        res.json(user);
                    }
                    else {
                        console.log("Wrong number of users found!")
                    }
                })
            }
            else {
                res.json(null);
            }
        })
    })
})

module.exports = router