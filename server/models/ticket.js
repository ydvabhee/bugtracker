const mongoose = require('mongoose')
const schema = mongoose.Schema

const ticketSchema = new schema({
    submitterId: {
        type:schema.Types.ObjectId,
        ref:'user'
    },
    projectId:{
        type:schema.Types.ObjectId,
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
            type:schema.Types.ObjectId,
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
        type:schema.Types.ObjectId,
        ref:'developer'
        }],
    project_manager : {
        type:schema.Types.ObjectId,
        ref:'project_manager'
    },
    type: {
        type:String,
        required:true
    }

})

module.exports = Ticket = mongoose.model('Ticket', ticketSchema)