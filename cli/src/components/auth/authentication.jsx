import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core';
import Login from './login';
import Register from './register';



export default class Authentication extends Component {

    constructor(props)
    {
        super();
        this.state = {
            isLogin:true,
            isSetTo : false
        }


    }

    checkSetTo(){
        if(this.props.setTo && this.state.isSetTo===false ){
            const _ = this.props.setTo==='register' ? false:true
            this.setState({isLogin:_,isSetTo:true})
        }
    }

    toggleWebPages = () => {
        this.setState({isLogin: !this.state.isLogin})
    }

    render() {
        this.checkSetTo();
        if(this.state.isLogin){
            return (
                <Login toggle = {this.toggleWebPages}/>
            )
        }
        else {
            return(
                <Register toggle = {this.toggleWebPages} />
            )
        }

    }
}
