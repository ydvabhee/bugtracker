const jwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('mongoose').model('users')

require('dotenv').config()

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.JWT_SECRET_KEY

module.exports = (passport) => {
    passport.use(new jwtStrategy(opts, (jwtPayload, done) => {

        User.findById(jwtPayload.id)
        .then(user => {
            if(user)
            {

                console.log("logging in passport config line 19 \n",user)
                return done(null,jwtPayload)

            }
            else {
                // user is not in database
                console.log("user not found");
            }
        })
        .catch(err => console.log(err))
    }))
}
