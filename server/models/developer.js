
const mongoose = require('mongoose')
const schema = mongoose.Schema

const developerSchema = new schema({
    developerID: {
        type:Schema.Types.ObjectId,
        ref:'user',
    },
    projects: [{
        type:Schema.Types.ObjectId,
        ref:'project',
    }]

})

module.exports = Developer = mongoose.model('developers',developerSchema)