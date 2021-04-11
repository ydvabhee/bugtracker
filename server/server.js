const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

const login = require('./routes/api/login')
const signup = require('./routes/api/signup')

const app = express()

//config db
const db = require('./config/keys').mongoURI

//connect to mongoDB
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("mongoDB is connected");
    })
    .catch(err => {console.log(err)})


// bodyparser middle-ware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// passport midlleware
app.use(passport.initialize())

// passport Configuration
require('./config/passport')(passport)

//routes
app.use('/api/login',login)
app.use('/api/signup',signup)

// @route   /test
// desc     testing
// access   private
app.get('/test', passport.authenticate('jwt', {session:false}), (req,res) => {
    return res.status(200).send(req.user)
})

const port = process.env.PORT||5000


app.listen(port, ()=> {
    console.log(`server running at ${port}`);
})