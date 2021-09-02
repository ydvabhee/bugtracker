import is_Empty from './is_Empty'


const loginFormValidation = (data) => {
    const errors = {}
    if(is_Empty(data.email)) {
        errors.email = 'Email is required'
    }
    if(is_Empty(data.password)){
        errors.password = 'Password is required'
    }

    return(
        {isValid : is_Empty(errors),
        errors}
    )
}

export default loginFormValidation