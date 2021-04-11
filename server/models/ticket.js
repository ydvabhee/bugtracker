const mongoose = require('mongoose')
const schema = mongoose.Schema

const ticketSchema = new schema({
    submitterId: {
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    projectId:{
        type:Schema.Types.ObjectId,
        ref:'project'
    },
    status : {
        type:String,
        required:true
    },
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    comments:[{
        users: {
            type:Schema.Types.ObjectId,
        ref:'user'
        },
        text: {
            type:String,
            required:true
        },
        date: {
            type:Date,
            default:Date.now
        }
    }],
    priority: {
        type:String,
        required:true
    },
    developers:[{
        type:Schema.Types.ObjectId,
        ref:'developer'
        }],
    project_manager : {
        type:Schema.Types.ObjectId,
        ref:'project_manager'
    }

})

module.exports = Ticket = mongoose.model('Ticket', ticketSchema)