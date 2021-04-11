import React from 'react'
import { Container, CssBaseline, FormControlLabel, Grid, makeStyles, Paper, Radio, TextField, Typography,RadioGroup, Button,Link } from '@material-ui/core'




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

    margin10:{
        marginBlock:'10px'
    },

    textfield: {
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
                                {/* <div style={{marginBlock:'10px'}}>
                                <TextField
                                     name='invitation_code'
                                     variant='outlined'
                                     label='Invitation Code'
                                     type='text'
                                     required
                                     autoFocus
                                     fullWidth
                                     ></TextField>
                                     <Typography
                                     color='secondary'
                                     style={{paddingLeft:'5px'}}
                                     >invalid invitation code</Typography>
                                     <Typography
                                     color='textSecondary'
                                     style={{paddingLeft:'5px'}}
                                     >You need Invitation code to sign up</Typography>
                                </div> */}
                                <div className={classes.margin10}>
                                <TextField
                                className={classes.textfield}
                                label='Name'
                                variant='outlined'
                                type='text'
                                fullWidth></TextField>
                                {/* <Typography
                                     color='secondary'
                                     style={{paddingLeft:'5px'}}
                                     >invalid name</Typography> */}
                                </div>
                                <div className={classes.margin10}>
                                <TextField
                                className={classes.textfield}
                                label='Email'
                                variant='outlined'
                                type='text'
                                fullWidth></TextField>
                               {/* <Typography
                                     color='secondary'
                                     style={{paddingLeft:'5px'}}
                                     >invalid email</Typography> */}
                                </div>

                                <div>
                                <TextField
                                className={classes.textfield}
                                label='Password'
                                variant='outlined'
                                type='password'

                                fullWidth></TextField>
                                {/* <Typography
                                     color='secondary'
                                     style={{paddingLeft:'5px'}}
                                     >Password should contain :- </Typography> */}
                                {/* <Typography
                                     color='secondary'
                                     style={{paddingLeft:'5px'}}
                                     >at least a number </Typography>
                                     <Typography
                                     color='secondary'
                                     style={{paddingLeft:'5px'}}
                                     >at least a capital letter</Typography>
                                     <Typography
                                     color='secondary'
                                     style={{paddingLeft:'5px'}}
                                     >at least a small letter</Typography>
                                     <Typography
                                     color='secondary'
                                     style={{paddingLeft:'5px'}}
                                     > at least a special characters  </Typography> */}
                                </div>

                                <div className={classes.margin10}>
                                <TextField
                                className={classes.textfield}
                                label='Confirm Password'
                                variant='outlined'
                                type='password'
                                fullWidth></TextField>
                                {/* <Typography
                                     color='green'
                                     style={{paddingLeft:'5px'}}
                                     >Password matched</Typography> */}
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
                                    type='sumbit'
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