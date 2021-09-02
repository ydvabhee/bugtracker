const validator = require('validator')
const is_Empty = require('./is_Empty')

exports.validateLoginInput = validateLoginInput = (data) => {
    let errors = {}

    data.email = is_Empty(data.email) ? '': data.email
    data.password = is_Empty(data.password) ? '': data.password

    if(validator.isEmpty(data.email))
    {
        errors.email = "Email is required"
    }

    if(!validator.isEmail(data.email) && !validator.isEmpty(data.email)) {
        errors.email = "Email is invalid"
    }

    if(validator.isEmpty(data.password))
    {
        errors.password = "Password is required"
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
        errors.currentPassword = "Current password is required"
    }
    if(validator.isEmpty(data.newPassword))
    {
        errors.newPassword = "New password is required"
    }
    if(validator.isEmpty(data.confirmPassword))
    {
        errors.confirmPassword = "Confirm password is required"
    }


    if(!validator.isLength(data.newPassword, {min:6,max:30}) && !validator.isEmpty(data.newPassword)) {
        errors.newPassword = "Length of the new password should be 6 to 30 character"
    }

    if(!validator.equals(data.newPassword,data.confirmPassword))
    {
        errors.doesNotMatched = "New password does not matched to confirm password"
    }

    return ({
        errors,
        isValid: is_Empty(errors)
    })
}