const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcrypt')

const validateSignup = require('../../validation/signup')


//load user model
const User = require('../../models/user')

// Route        POST api/test
// desc         testing api
// Access       Public
router.post('/test',(req,res) => {
     res.send({email:req.body.email})
})

router.get('/test',(req,res) => {
     res.send({msg:"working"})
})


// Route        POST api/signup
// desc         Register User
// Access       Public

router.post('/', (req,res)=> {

    //validate post data
    const {errors, isValid} = validateSignup(req.body)
    if(!isValid) return res.status(400).send({errors})

    User.findOne({email:req.body.email})
    .then(async (id) => {

        if(!id) {
            let newUser = {}
            newUser.name = req.body.name.toLowerCase()
            newUser.email = req.body.email.toLowerCase()
            newUser.type = 'submitter'

            //hashing password
            const hashedpass =  await bcrypt.hash(req.body.password,10)

            newUser.password = hashedpass

            //getting gravatar url
            const url = gravatar.url(req.body.email, {s: '100', r: 'x', d: 'retro'}, false);
            newUser.avatar = url;
            console.log(newUser);

            //add new user to database
            new User(newUser).save()
            .then((user)=> {
                res.send({user})
                console.log(user);
            })
            .catch(err => {console.log(err)})

       }
       else {
           errors.email = 'user already registered'
           res.status(400).send({errors})
       }
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = router;