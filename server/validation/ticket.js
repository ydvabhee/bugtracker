const validator = require('validator')
const is_Empty = require('./is_Empty')

module.exports = validateTicketInput = (data) => {

    let errors = {}
    data.projectId = is_Empty(data.projectId)? '': data.projectId
    data.description = is_Empty(data.description)? '': data.description
    data.priority = is_Empty(data.priority)? '': data.priority
    data.title = is_Empty(data.title)? '': data.title

    if(validator.isEmpty(data.projectId))
    {
        errors.projectId = "project id is required"
    }

    if(validator.isEmpty(data.description))
    {
        errors.description = "ticket description is required"
    }

    if(validator.isEmpty(data.priority))
    {
        errors.priority = "ticket priority is required"
    }
    if(validator.isEmpty(data.title))
    {
        errors.title = "ticket title is required"
    }

    return ({
        errors,
        isValid:is_Empty(errors)
    })

}