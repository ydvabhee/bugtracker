const validator = require('validator')
const is_Empty = require('./is_Empty')

module.exports = validateProjectInputField = (data) => {

    let errors = {}

    data.title = is_Empty(data.title)? '': data.title
    data.description = is_Empty(data.description)? '': data.description
    data.status = is_Empty(data.status)? '': data.status

    if(validator.isEmpty(data.title))
    {
        errors.title = "project title is required"
    }
    if(validator.isEmpty(data.description))
    {
        errors.description = "project description is required"
    }
    if(validator.isEmpty(data.status))
    {
        errors.status = "project status is required"
    }

    return({
        errors,
        isValid: is_Empty(errors)
    })
}