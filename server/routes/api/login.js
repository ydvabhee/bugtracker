const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const passport = require('passport')


require('dotenv').config()

const {validateLoginInput,validateChangePasswordInput } = require('../../validation/login')
// const  = require('../../validation/login').validateChangePasswordInput

// @route api/login/
// access Public
// desc Login
router.get('/',(req,res) => {

    //validate login input
    const {errors, isValid} = validateLoginInput(req.body)
    if(!isValid) return res.status(400).send(errors)

    const email = req.body.email
    const password = req.body.password

    //find email from database
    User.findOne({email})
    .then(user => {

        //check user in database
        if(!user)
        {
            return res.status(404).send({msg:'user not found'})
        }

        //compare password
        bcrypt.compare(password,user.password)
        .then(isMatch => {

            //password matched
            if(isMatch)
            {
                //create payload
                const payload = {id: user.id, name: user.name, avatar:user.avatar}

                //jwt sign
                jwt.sign(payload,process.env.JWT_SECRET_KEY , function (err, token) {


                    // if error occurs log it and send 400 status
                    if(err) {
                        console.log(err);
                        return res.status(400).send(err)
                    }

                    //response token to the browser
                    res.status(200).send({
                        isLogedIn: true,
                        token : 'Bearer '+ token
                    })
                })

            }

            //password mismatched
            else {
            return res.status(400).send({msg:'incorrect password'})
            }
        })
    })
    .catch(err => console.log(err))







})


// @route   api/login/forgetpassword
// desc     change password
// access   private
router.post('/changepassword', passport.authenticate('jwt', {session:false}), (req,res) => {

    const {errors, isValid} = validateChangePasswordInput(req.body)
    if(!isValid) return res.status(400).send(errors)

    //compare currentPassword to the password is in database
    User.findById(req.user.id)
    .then(user => {
        console.log(req.body.currentPassword);
        bcrypt.compare(req.body.currentPassword,user.password)
        .then(async isMatched => {

            if(isMatched){
            const hashedpass = await bcrypt.hash(req.body.newPassword, 10)
            user.password = hashedpass
            user.save()
            .then(()=> {
                console.log("changed");
            })

            return res.status(200).send({success:true, user})
        }
        else
        {
            return res.status(400).send({msg:"password is incorrect"})

        }
        })
    })
    .catch(err => {
         console.log(err)
        })



})

module.exports = router;3600