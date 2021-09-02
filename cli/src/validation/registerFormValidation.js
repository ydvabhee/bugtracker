import is_Empty from './is_Empty'

// export default password_validation= (data)=>
// {
//     p_error = {}
// }

export default function register(data) {
    const errors = {}

   if(is_Empty(data.name)){
       errors.name = 'Name is required'
   }

   if(is_Empty(data.email)){
    errors.email = 'Email is required'
    }
    if(is_Empty(data.password)){
        errors.password = 'Password is required'
    }
    if(is_Empty(data.confirmPassword)){
        errors.confirmPassword = 'Confirm password is required'
    }

    else if(!(data.password === data.confirmPassword)){
        errors.confirmPassword = 'passwords does not match'
    }

    return({
        isValid: is_Empty(errors),
        errors
    })
}
