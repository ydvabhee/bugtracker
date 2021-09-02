import React, { useState } from 'react'
import { Container,CssBaseline, Grid, Paper, TextField, Typography, Button } from '@material-ui/core'
import useRegStyle from '../../styles/registerStyles'
import CancelIcon from '@material-ui/icons/Cancel';
import axios from 'axios'
import registerFormValidation from '../../validation/registerFormValidation'
import { connect } from 'react-redux'
import {registerUser} from '../../actions/authActions'



const Register = (props) => {
    const classes = useRegStyle()

    //creating input data state
    let [inputData, setInputData] = useState({name:'',email:'',password:'',confirmPassword:''})
    //create errros state
    let [errors,setErrors] = useState({eName:null,eEmail:null,ePassword:null,eConfirmPassword:null})


    const handleInputChange = (event) => {
        let name = event.target.name;
        let value = event.target.value
        setInputData(prevInputData => ({
            ...prevInputData,[name]:value
        }))
    }

    const handleToggleCallback = () => {
        props.toggle()
    }

    const handleErrors = (err) => {
        let eName = err.name? err.name:null
        let ePassword = err.password ? err.password:null
        let eEmail =err.email?err.email:null
        let eConfirmPassword = err.confirmPassword?err.confirmPassword:null
        if(eName)
        {
            setErrors(prevErrors => ({
                ...prevErrors,'eName':eName
            }))
        }
        else {
            setErrors(prevErrors => ({
                ...prevErrors,'eName':null
            }))
        }
        if(ePassword)
        {
            setErrors(prevErrors => ({
                ...prevErrors,'ePassword':ePassword
            }))
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,'ePassword':null
            }))
        }

        if(eEmail)
        {
            setErrors(prevErrors => ({
                ...prevErrors,'eEmail':eEmail
            }))
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,'eEmail':null
            }))
        }

        if(eConfirmPassword)
        {
            setErrors(prevErrors => ({
                ...prevErrors,'eConfirmPassword':eConfirmPassword
            }))
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,'eConfirmPassword':null
            }))
        }
        console.log(errors);
    }

    const handleSubmit = (e) => {

        const {isValid, errors} = registerFormValidation(inputData)
        if(!isValid){
            handleErrors(errors)
            return
        }
         const newUser = {
             name:inputData.name,
             email:inputData.email,
             password:inputData.password,
             confirmPassword:inputData.confirmPassword
         }

         props.registerUser(newUser)

        //  axios.post('api/signup/',newUser)
        //  .then(data => console.log(data))
        //  .catch(err => {
        //      if(err.response.data.errors){
        //         handleErrors(err.response.data.errors)
        //      }
        //      console.log(err.response)
        //     })

    }

    return (
        <Container className={classes.container}>
            <CssBaseline>
                    <Grid container className={classes.reg_form_container}>
                        <Grid item xs="12" sm='8' md='6' lg='5'>
                            <Paper className={classes.reg_form}>
                                <div style={{marginBottom:'15px'}}>
                                    <Typography variant='h5'>
                                        Register
                                    </Typography>
                                    <Typography color='textSecondary'>
                                        Fill up the form to continue
                                    </Typography>
                                </div>

                                <div className={classes.margin10}>
                                <TextField
                                className={classes.textfield}
                                label='Name'
                                variant='outlined'
                                type='text'
                                value = {inputData.name}
                                name='name'
                                onChange = {handleInputChange}
                                fullWidth></TextField>

                                { errors.eName && (<Typography className={classes.errorText}>
                                <CancelIcon className={classes.crossIcon} />
                                    {errors.eName}
                                </Typography>)}


                                </div>
                                <div className={classes.margin10}>
                                <TextField
                                className={classes.textfield}
                                label='Email'
                                variant='outlined'
                                type='text'
                                value = {inputData.email}
                                name='email'
                                onChange = {handleInputChange}
                                fullWidth></TextField>

                                { errors.eEmail && (<Typography className={classes.errorText}>
                                <CancelIcon className={classes.crossIcon} />
                                {errors.eEmail}
                                </Typography>)}
                                </div>

                                <div>
                                <TextField
                                className={classes.textfield}
                                label='Password'
                                variant='outlined'
                                type='password'
                                name='password'
                                onChange={handleInputChange}
                                value = {inputData.password}
                                fullWidth></TextField>

                                { errors.ePassword && (<Typography className={classes.errorText}>
                                <CancelIcon className={classes.crossIcon} />
                                {errors.ePassword}
                                </Typography>)}
                                </div>

                                <div className={classes.margin10}>
                                <TextField
                                className={classes.textfield}
                                label='Confirm Password'
                                variant='outlined'
                                type='password'
                                name='confirmPassword'
                                value = {inputData.confirmPassword}
                                onChange = {handleInputChange}
                                fullWidth></TextField>

                                {errors.eConfirmPassword && (<Typography className={classes.errorText}>
                                <CancelIcon className={classes.crossIcon} />
                                {errors.eConfirmPassword}
                                </Typography>)}
                                </div>

                                <div style={{marginBlock:'5px'}}>

                                    <Button
                                    type='sumbit'
                                    variant='contained'
                                    color='primary'
                                    onClick = {handleSubmit}
                                    fullWidth>
                                        Register
                                    </Button>
                                </div>
                                <div style={{marginTop:'30px',textAlign:'center'}}>
                                    <Typography color='textSecondary'>
                                        Already have a account? <span className={classes.spanButton} onClick={handleToggleCallback}>Login </span>
                                    </Typography>
                                </div>

                            </Paper>
                        </Grid>
                    </Grid>


            </CssBaseline>
        </Container>

    )
}

export default connect(null, {registerUser})(Register)