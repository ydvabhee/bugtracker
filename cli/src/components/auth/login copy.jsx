import React from 'react'
import {Button,Paper, Container, CssBaseline, Grid, makeStyles, TextField, Typography, InputAdornment, IconButton, Icon,Link} from '@material-ui/core'
import {AccountCircleRounded, PersonRounded, Visibility, VisibilityOff} from '@material-ui/icons'


const useStyle = makeStyles({
    login_form_container:{
        justifyContent:'center',
        minHeight:'100vh',
        alignContent:'center'
    },

    login_form:{
        padding:"40px",
        textAlign:'center'
    },

    header_text : {
        textAlign:'center',
        marginBottom:'8px'
    },

    textfield: {
        marginBlock:"8px"
    },
    login_button: {
        marginTop:'5px',
        padding:'10px'

    }
})



const Login = (props) =>
{


    const classes = useStyle()
    const [values, setValues] = React.useState({
        showPassword:false
    });


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword})
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };


    return(
         <Container>
             <CssBaseline>
                 <form>
                 <Grid container className={classes.login_form_container} >
                     <Grid item xs="12" sm='8' md='6' lg='4'>
                        <Paper className= {classes.login_form}>
                            <Icon>
                                <AccountCircleRounded color='primary' style={{fontSize:48, justifyContent:'center'}}/>
                                <Typography variant='h5' className={classes.header_text}> Login page</Typography>
                            </Icon>

                            <div>
                                <TextField
                                className={classes.textfield}
                                id='email'
                                name='email'
                                variant='outlined'
                                label='Email'
                                fullWidth
                                autoFocus >
                                </TextField>
                            </div>
                            <div>
                                <TextField
                                className={classes.textfield}
                                id='password'
                                name='password'
                                type={values.showPassword ? 'text':'password'}
                                variant='outlined'
                                label='Password'

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
                                fullWidth>Login</Button>
                            </div>

                            <div style={{marginTop:'30px'}}>
                                <Typography color="textSecondary">
                                    Don't have a account?
                                    <Link href="/register" variant="inherit" underline="none"> Sign Up</Link>
                                </Typography>
                            </div>
                        </Paper>
                     </Grid>
                 </Grid>
                </form>
             </CssBaseline>
         </Container>
    )

}

export default Login