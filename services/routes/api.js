const { check, validationResult } = require('express-validator');
const express = require("express")
const router = express.Router()

const bcrypt = require('bcrypt')

router.get('/test', function (req, res, next) {
    console.log("Fetch recieved")
    res.json(["hello world"]);
})

//https://stackoverflow.com/questions/1233451/delete-from-two-tables-in-one-query
router.post('/deletepost/:id', function (req, res, next) {
    console.log("Delete posts")
    const postId = req.params.id;
    const sqlquery = `DELETE forumcomments.* FROM forumcomments INNER JOIN forumposts 
                      ON forumcomments.postId = forumposts.id  
                      WHERE forumcomments.postId=${postId}`
    db.query(sqlquery, (err, result) => {
        if (err) {
            next(err)
        }
        else {
            const postQuery = `DELETE FROM forumposts WHERE id=${postId}`
            db.query(postQuery, (err, result1) => {
                if (err) {
                    next(err)
                }
                else {
                    console.log("posts deleted")
                    res.json(result1)
                    // const fetch = `SELECT forumposts.id, forumposts.title, forumposts.body, forumposts.created, forumposts.edited, forumPosts.userId,
                    //                   users.userName, users.email, SUM(IFNULL(forumposts.id = forumcomments.postId, 0)) as commentCount
                    //                   FROM forumposts
                    //                   LEFT OUTER JOIN users ON forumposts.userId = users.id
                    //                   LEFT OUTER JOIN forumcomments on forumposts.id = forumcomments.postId
                    //                   WHERE users.id=forumposts.userId
                    //                   GROUP BY forumposts.id`
                    // db.query(fetch, (err, result2) => {
                    //     if (err) {
                    //         next(err)
                    //     }
                    //     else {
                    //         console.log(result2);
                    //         res.json(result2);
                    //     }
                    // })
                }
            })
        }
    })
})

router.get('/getpost/:id', function (req, res, next) {
    console.log("Fetch posts")
    const postId = req.params.id;
    const sqlquery = `SELECT forumposts.id, forumposts.title, forumposts.body, forumposts.created, forumposts.edited, forumPosts.userId,
                      users.userName, users.email 
                      FROM forumposts
                      INNER JOIN users ON forumposts.userId = users.id
                      WHERE users.id=forumposts.userId AND forumposts.id=${postId}`
    db.query(sqlquery, (err, result) => {
        if (err) {
            next(err)
        }
        else {
            console.log("posts got")
            const commentQuery = `SELECT forumcomments.id, forumcomments.body, forumcomments.created, forumcomments.edited, forumcomments.postId, forumcomments.userId,
                                  users.userName
                                  FROM forumcomments 
                                  INNER JOIN users ON forumcomments.userId = users.id
                                  WHERE users.id=forumcomments.userId AND forumcomments.postId=${postId}`
            db.query(commentQuery, (err, result2) => {
                if (err) {
                    next(err)
                }
                else {
                    console.log(result);
                    console.log(result2);
                    result[0].comments = result2;
                    console.log(result);
                    res.redirect('/getposts');
                }
            })
        }
    })
})

//https://stackoverflow.com/questions/2802713/changing-a-sum-returned-null-to-zero
//https://stackoverflow.com/questions/73990118/sql-count-occurrences-of-an-id-from-another-table-in-multiple-rows
router.get('/getposts', function (req, res, next) {
    const postId = req.body.postId;
    console.log("Fetch posts")
    const sqlquery = `SELECT forumposts.id, forumposts.title, forumposts.body, forumposts.created, forumposts.edited, forumPosts.userId,
                      users.userName, users.email, SUM(IFNULL(forumposts.id = forumcomments.postId, 0)) as commentCount
                      FROM forumposts
                      LEFT OUTER JOIN users ON forumposts.userId = users.id
                      LEFT OUTER JOIN forumcomments on forumposts.id = forumcomments.postId
                      WHERE users.id=forumposts.userId
                      GROUP BY forumposts.id`
    db.query(sqlquery, (err, result) => {
        if (err) {
            next(err)
        }
        else {
            // const commentQuery = `SELECT forumcomments.id
            //                       FROM forumcomments 
            //                       WHERE forumcomments.postId=${postId}`
            // db.query(commentQuery, (err, result2) => {
            //     if (err) {
            //         next(err)
            //     }
            //     else {
            //         console.log(result);
            //         console.log(result2);
            //         result[0].comments = result2;
            //         console.log(result);
            //         res.json(result);
            //     }
            // })
            console.log(result);
            res.json(result)

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

router.post('/addcomment/:id', [check('text').not().isEmpty()], function (req, res, next) {
    const postId = req.params.id;
    console.log("adding comment to post " + postId)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        //res.redirect('./register');
        console.log(errors);
        next(500);
    }
    else {
        console.log(req.body)
        let sqlquery = "INSERT INTO forumcomments (postId, body, created, edited, userId) VALUES (?,?,NOW(),NOW(),?)"
        // execute sql query
        let newrecord = [postId, req.sanitize(req.body.text), req.body.userId]
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