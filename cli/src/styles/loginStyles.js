import {makeStyles} from '@material-ui/core'

const useLoginStyle = makeStyles({
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
        margin:'0px'
    },

    textfield: {
        marginBlockStart:'8px'
    },
    login_button: {
        marginTop:'5px',
        padding:'10px'

    },
    errorText: {
        border:'0px solid',fontSize:'12px', color:'red', margin:'0px 5px', display:'flex', alignContent:'center',

    },
    crossIcon: {
        fontSize:'12px', marginBlock:'3px'
    },
    infoIcon: {
        fontSize:'22px'
    },
    userNotFoundText: {
        fontSize:'18px',
        fontStyle:'italic',
        border:'0px solid',
        color:'red', margin:'0px 5px',
        display:'flex',
        alignContent:'center',
        justifyContent:'center'
    },

    spanButton: {
        cursor:'pointer',
        color:'blue',
        '&:hover':{
            color:'green'
        }
    }


});

 export default useLoginStyle;