const validator = require('validator')
const is_Empty = require('./is_Empty')

exports.validateLoginInput = validateLoginInput = (data) => {
    let errors = {}

    data.email = is_Empty(data.email) ? '': data.email
    data.password = is_Empty(data.password) ? '': data.password

    if(validator.isEmpty(data.email))
    {
        errors.email = "email is required"
    }

    if(validator.isEmpty(data.password))
    {
        errors.password = "password is required"
    }

    return({
        errors,
        isValid: is_Empty(errors)
    })
}

exports.validateChangePasswordInput = validateChangePasswordInput = (data) => {
    let errors = {}

    data.currentPassword = is_Empty(data.currentPassword)? '':data.currentPassword
    data.newPassword = is_Empty(data.newPassword)? '':data.newPassword
    data.confirmPassword = is_Empty(data.confirmPassword)? '':data.confirmPassword

    if(validator.isEmpty(data.currentPassword))
    {
        errors.currentPassword = "current password is required"
    }
    if(validator.isEmpty(data.newPassword))
    {
        errors.newPassword = "new password is required"
    }
    if(validator.isEmpty(data.confirmPassword))
    {
        errors.confirmPassword = "confirm password is required"
    }


    if(!validator.isLength(data.newPassword, {min:6,max:30}) && !validator.isEmpty(data.newPassword)) {
        errors.newPassword = "length of the new password should be 6 to 30 character"
    }

    if(!validator.equals(data.newPassword,data.confirmPassword))
    {
        errors.doesNotMatched = "new password does not matched to confirm password"
    }

    return ({
        errors,
        isValid: is_Empty(errors)
    })
}