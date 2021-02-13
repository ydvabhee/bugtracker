import React from 'react'
import { Container, CssBaseline, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Input, InputLabel, makeStyles, Paper, Radio, TextField, Typography,RadioGroup, Button,Link } from '@material-ui/core'
import {} from '@material-ui/icons'



const useStyle = makeStyles({
    reg_form_container:{
        justifyContent:'center',
        minHeight:'100vh',
        alignContent:'center',
        border:'1px solid',

    },

    reg_form:{
        padding:"40px",
        textAlign:'left'
    },

    header_text : {
        textAlign:'left',
        marginBottom:'8px'
    },

    textfield: {
        marginBlock:"8px",
        borderRadius:'50%',


    },
    Register_button: {
        marginTop:'5px',
        padding:'10px'

    },
    hover: {
        '&:hover':{
            color:'#F50057'
        }
    }


})


const Register = () => {
    const classes = useStyle()
    return (
        <Container className={classes.container}>
            <CssBaseline>
                <form>
                    <Grid container className={classes.reg_form_container}>
                        <Grid item xs="4">
                            <Paper className={classes.reg_form}>
                                <div style={{marginBottom:'15px'}}>
                                    <Typography variant='h5'>
                                        Register
                                    </Typography>
                                    <Typography color='textSecondary'>
                                        Fill up the form to continue
                                    </Typography>
                                </div>
                                <div>
                                <TextField
                                className={classes.textfield}
                                label='Name'
                                variant='outlined'
                                type='text'
                                fullWidth></TextField>
                                </div>
                                <div>
                                <TextField
                                className={classes.textfield}
                                label='Email'
                                variant='outlined'
                                type='text'
                                fullWidth></TextField>
                                </div>
                                <div>
                                <TextField
                                className={classes.textfield}
                                label='Password'
                                variant='outlined'
                                type='password'
                                fullWidth></TextField>
                                </div>
                                <div>
                                <TextField
                                className={classes.textfield}
                                label='Confirm Password'
                                variant='outlined'
                                type='password'
                                fullWidth></TextField>
                                </div>
                                <div>
                                <RadioGroup row aria-lable='position' name='position' defaultValue='top'>

                                <FormControlLabel
                                value="Male"
                                control={<Radio></Radio>}
                                label="Male"
                                labelPlacement="right"
                                />
                                <FormControlLabel
                                value="Female"
                                control={<Radio></Radio>}
                                label="Female"
                                labelPlacement="right"
                                />
                                <FormControlLabel
                                value="Other"
                                control={<Radio></Radio>}
                                label="Other"
                                labelPlacement="right"
                                />
                                </RadioGroup>
                                </div>
                                <div style={{marginBlock:'5px'}}>
                                    <Button
                                    variant='contained'
                                    color='primary'
                                    fullWidth>
                                        Register
                                    </Button>
                                </div>
                                <div style={{marginTop:'30px',textAlign:'center'}}>
                                    <Typography color='textSecondary'>
                                        Already have a account? <Link className={classes.hover} href="#" underline='none'>Login </Link>
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

export default Register