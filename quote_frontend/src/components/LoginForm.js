import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
            if(x == 1){
                window.open("http://localhost:3000/salesLand", "_self");
                sessionStorage.setItem("username", userID);
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
                <h1>Welcome! Please Login Below</h1>
                <label htmlFor='userID'>userID</label>
                <input name='userID' placeholder='userID' value = {this.state.userID} onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor='password'>password</label>
                <input type='password' name='password' placeholder='password' value = {this.state.password} onChange={this.handleChange}/>
            </div>
            <div>
                <br></br>
                <button>Login</button>
            </div>
    
          </form>
        );
      }
}

export default LoginForm;