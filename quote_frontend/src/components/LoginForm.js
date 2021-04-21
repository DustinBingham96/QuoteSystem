import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {Button, TextField, Input, InputLabel, Card, Typography } from '@material-ui/core';
import '../css/Form.css'


class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {  userID:   '',
                        pass:     ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
      }

      handleSubmit(event) {
        const {userID, password} = this.state;
        const url = 'http://localhost/login.php';
        const form = new FormData();
        form.append('id', userID);
        form.append('pass', password);
        axios.post(url, form).then(function(response){
            console.log(response.data);
            let x = response.data;
            if(x > 0){
                window.open("http://localhost:3000/salesLand", "_self");
                sessionStorage.setItem("username", userID);
                sessionStorage.setItem("ID", x);
            }
            else{
                alert("Login Failed! Please try again or contact administrator to reset password");
            }
        });

       event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div>
                <Typography>
                <h1>Welcome! Login Below</h1>
                </Typography>
                <InputLabel className="formlabel" color="primary" htmlFor='userID'>UserID</InputLabel>
                <Input name='userID' placeholder='UserID' value = {this.state.userID} onChange={this.handleChange}/>
            </div>
            <br />
            <div>
                <InputLabel htmlFor='password'>Password</InputLabel>
                <Input type='password' name='password' placeholder='Password' value = {this.state.password} onChange={this.handleChange}/>
            </div>
            <div>
                <br></br>
                <Button>Login</Button>
            </div>
          </form>
        );
      }
}

export default LoginForm;