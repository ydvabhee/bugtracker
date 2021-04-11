const validator = require('validator')
const is_Empty = require('./is_Empty')



module.exports =  validateSignup = (data) => {
    let errors = {}


    data.name = is_Empty(data.name) ? '': data.name
    data.password = is_Empty(data.password)? '': data.password
    data.email = is_Empty(data.email)? '': data.email

    if(validator.isEmpty(data.name))
    {
        errors.name = 'Name is required'
    }
    if(validator.isEmpty(data.email))
    {
        errors.email = 'Email is required'
    }
    if(validator.isEmpty(data.password))
    {
        errors.password = 'Password is required'
    }


    if(!validator.isLength(data.password, {min:6,max:30}) && !validator.isEmpty(data.password)) {
        errors.password = "length of password should be 6 to 30 character"
    }

    if(!validator.isEmail(data.email) && !validator.isEmpty(data.email)) {
        errors.email = "email is invalid"
    }

    return ({
        errors,
        isValid:is_Empty(errors)
    })

}