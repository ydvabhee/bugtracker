import { makeStyles } from "@material-ui/core"

const useRegStyle = makeStyles({
    reg_form_container:{
        justifyContent:'center',
        minHeight:'100vh',
        alignContent:'center',
        // border:'1px solid',

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
    },
    errorText: {
        border:'0px solid',fontSize:'12px', color:'red', margin:'2px 5px', display:'flex', alignContent:'center'
    },
    crossIcon: {
        fontSize:'12px', marginBlock:'3px'
    },
    spanButton: {
        cursor:'pointer',
        color:'blue',
        '&:hover':{
            color:'green'
        }
    }


})

export default useRegStyle;