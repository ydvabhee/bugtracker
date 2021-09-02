const validator = require('validator')
const is_Empty = require('./is_Empty')

exports.validateTicketInput = (data) => {

    let errors = {}
    data.projectId = is_Empty(data.projectId)? '': data.projectId
    data.description = is_Empty(data.description)? '': data.description
    data.priority = is_Empty(data.priority)? '': data.priority
    data.title = is_Empty(data.title)? '': data.title
    data.type = is_Empty(data.type)? '': data.type

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
    if(validator.isEmpty(data.type))
    {
        errors.type = "ticket type is required"
    }

    return ({
        errors,
        isValid:is_Empty(errors)
    })

}


// status field validation
exports.validateStatusField = (data) => {

    let errors = {}
    data.status = is_Empty(data.status)? '': data.status


    if(validator.isEmpty(data.status))
    {
        errors.status = "ticket statusis required"
    }


    return ({
        errors,
        isValid:is_Empty(errors)
    })

}


// status field validation
exports.validatePriorityField = (data) => {

    let errors = {}
    data.status = is_Empty(data.priority)? '': data.priority


    if(validator.isEmpty(data.priority))
    {
        errors.priority = "ticket priority required"
    }


    return ({
        errors,
        isValid:is_Empty(errors)
    })

}