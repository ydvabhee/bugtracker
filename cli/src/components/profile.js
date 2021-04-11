import React from 'react'
import {Container,Avatar, Typography, CssBaseline,Grid, makeStyles,Paper} from '@material-ui/core'

const useStyle = makeStyles({
    headText: {
        fontSize:'48px'
    },
    paper:{
        margin:'10px',
        padding:'10px',
        minWidth:'500px',
        minHeight:'300px',

        // display:'flex',
        // justifyContent:'center',
        // alignContent:'center'

    },
    avatar:{
        width:'100px',
        height:'100px',
        fontSize:'48px',
        backgroundColor:'#AF1A00',
    },
    noticeText:{
        fontSize:'22px',
        textAlign:'center',
        marginTop:"30px"
    }
})


export default function Profile() {
    const classes = useStyle()
    return (
         <Container>
            <cssBaseline>
                <Grid container>
                   <Paper className={classes.paper}>
                   <Avatar className={classes.avatar}>N</Avatar>
                    <Typography className={classes.noticeText}>
                      Hi Username  you are successfully Logged in!
                    </Typography>
                    </Paper>
                </Grid>
            </cssBaseline>
         </Container>
    )
}
