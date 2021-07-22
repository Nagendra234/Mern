const express = require('express');
const router = express.Router();
const User = require("../Models/signinSchema")

router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});

router.post('/register', (req, res) => {
    signedUser = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    })
    signedUser.save()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.json(error)
        })
});

module.exports = router;