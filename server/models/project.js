const mongoose = require('mongoose')
const schema = mongoose.Schema

const projectSchema = new schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    createAt: {
        type:Date,
        default:Date.now
    },
    status: {
        type:String,
        required:true
    },
    manager: {
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    developers: [{
        type:Schema.Types.ObjectId,
        ref:'user'
    }]
})

module.exports = Project = mongoose.model('projects',projectSchema)