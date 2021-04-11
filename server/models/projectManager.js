
const mongoose = require('mongoose')
const schema = mongoose.Schema

const projectManagerSchema = new schema({
    projectManager: {
        type:Schema.Types.ObjectId,
        ref:'user',
     },
    projects: [{
        type:Schema.Types.ObjectId,
        ref:'project',
     }]

})

module.exports = ProjectManager = mongoose.model('projectManagers',projectManagerSchema)