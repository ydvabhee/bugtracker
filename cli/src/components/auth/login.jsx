import React,{useState} from 'react'
import {Button,Paper, Container, CssBaseline, Grid, TextField, Typography, InputAdornment, IconButton, Icon,Link} from '@material-ui/core'
import {AccountCircleRounded, Visibility, VisibilityOff} from '@material-ui/icons'
import CancelIcon from '@material-ui/icons/Cancel'
import InfoIcon from '@material-ui/icons/Info';
import useLoginStyle from '../../styles/loginStyles'
import axios from 'axios'
import loginFormValidation from '../../validation/loginFormValidation'


const Login = (props) =>
{


    const classes = useLoginStyle()
    const [values, setValues] = useState({
        showPassword:false,
        email:'',
        password:''
    });


    //ERROR STATE hooks
    const [errors, setErrors] = useState({
        eEmail:null,
        ePassword:null,
        userNotFound:null
    });

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
      };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword})
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const handleErrors = (err) => {
        const eEmail = err.email ? err.email : null;
        const ePassword = err.password ? err.password:null
        const userNotFound = err.userNotFound ? err.userNotFound:null

        if(eEmail) {
            setErrors(prevErrors => ({...prevErrors,'eEmail': eEmail }))
            console.log(eEmail);
        }
        else
        {
            setErrors(prevErrors => ({...prevErrors,'eEmail': null }))
        }

        if(ePassword) {

            setErrors(prevErrors => ({...prevErrors,'ePassword': ePassword }))
        }
        else
        {
            setErrors(prevErrors => ({...prevErrors,'ePassword': null }))
        }

        if(userNotFound) {

            setErrors(prevErrors => ({...prevErrors,'userNotFound': userNotFound }))
        }
        else
        {
            setErrors(prevErrors => ({...prevErrors,'userNotFound': null }))
        }

        console.log(errors);
      }



    const handleSubmit = (event) => {

        const {isValid, errors} = loginFormValidation(values)

        if(!isValid){
            handleErrors(errors)
            return
        }

        const data = {
            email:values.email,
            password:values.password
        }


        axios.post('api/login/',data)
        .then(data => console.log(data))
        // .catch(err => console.log(err))
        .catch(err =>{
            if(err.response.data.errors)
            {
              handleErrors(err.response.data.errors)
            }
            console.log(err.response)
        })

        event.preventDefault();

    }

    const handleToggleCallback = () => {
        props.toggle()
    }


    return(
         <Container>
             <CssBaseline>
                 <Grid container className={classes.login_form_container} >
                     <Grid item xs="12" sm='8' md='6' lg='4'>
                        <Paper className= {classes.login_form}>

                            { errors.userNotFound && (<Typography
                             className={classes.userNotFoundText}
                            ><InfoIcon
                            className={classes.infoIcon}
                            />
                               <span>User not found </span>
                            </Typography>)}

                            <Icon style={{margin:'0px'}}>
                                <AccountCircleRounded color='primary' style={{ fontSize:'64px' }}/>
                            </Icon>
                                {/* <Typography variant='h6' className={classes.header_text}> Login page</Typography> */}


                            <div>
                                <TextField
                                className={classes.textfield}
                                id='email'
                                name='email'
                                variant='outlined'
                                label='Email'
                                value = {values.email}
                                onChange = {handleChange}
                                fullWidth
                                 >
                                </TextField>

                                { errors.eEmail && (<Typography className={classes.errorText}>
                                    <CancelIcon className={classes.crossIcon}/>
                                    <span> { errors.eEmail} </span>
                                </Typography>)}
                            </div>
                            <div>
                                <TextField
                                className={classes.textfield}
                                id='password'
                                name='password'
                                type={values.showPassword ? 'text':'password'}
                                variant='outlined'
                                label='Password'
                                value = {values.password}
                                onChange = {handleChange}
                                InputProps = {{
                                    endAdornment:(
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}>
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth
                                >
                                </TextField>
                                { errors.ePassword  && (<Typography className={classes.errorText}>
                                    <CancelIcon className={classes.crossIcon}/>
                                    <span> { errors.ePassword }</span>
                                </Typography>)}
                            </div>
                            <Typography color="textSecondary" style={{marginBlock:'5px'}}>
                                <Link href="#"
                                color='textSecondary'
                                underline='none'>
                                Forgot password?
                                </Link>
                                </Typography>
                            <div>
                                <Button
                                type='sumbit'
                                color="primary"
                                className={classes.login_button}
                                variant='contained'
                                label='sign in'
                                onClick = {handleSubmit}
                                fullWidth>Login</Button>
                            </div>

                            <div style={{marginTop:'30px'}}>
                                <Typography color="textSecondary">
                                    Don't have a account?
                                    <span className={classes.spanButton} onClick={handleToggleCallback} > Sign Up</span>

                                </Typography>
                            </div>
                        </Paper>
                     </Grid>
                 </Grid>
             </CssBaseline>
         </Container>
    )

}

export default Login