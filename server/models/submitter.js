const mongoose = require('mongoose')
const schema = mongoose.Schema

const submitterSchema = new schema({
    submitter_id: {
        type:Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    tickets: [{
        type:Schema.Types.ObjectId,
        ref:'ticket',
        required:true
    }]
})

module.exports = Submitter = mongoose.model('submitters', submitterSchema)