const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
     name : {
         type:String,
         required:true
     },
     email:{
         type:String,
         required:true
     },
     password:{
         type:String,
         required:true
     },
     avatar:{
         type:String,
         required:true
     },
     date:{
         type:Date,
         default:Date.now
     },
     type: {
         type:String,
         required:true
     },
     status: {
        type:String,
        required:true
     }
})

module.exports = User = mongoose.model('users',userSchema)