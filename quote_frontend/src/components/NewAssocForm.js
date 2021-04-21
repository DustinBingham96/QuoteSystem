import React from "react";
import axios from "axios";
import { Input, InputLabel, TextField, Button} from '@material-ui/core';



class NewAssocForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {userID: '',
                    password: '',
                    commission: 0,
                    address: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
        [event.target.name] : event.target.value
    })
  }

  handleSubmit(event) {
    const {userID, password, commission, address} = this.state;
    const url = 'http://localhost/addassoc.php';
    const form = new FormData();
    form.append('id', userID);
    form.append('pass', password);
    form.append('comm', commission);
    form.append('addr', address);
    axios.post(url, form).then(function(response){
        console.log(response)
    })
    event.preventDefault();
    alert('Associate Info was submitted. UserID: ' + userID + ' password: ' + password + ' commission: ' + commission + ' address: ' + address);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <InputLabel htmlFor='userID'>userID</InputLabel>
            <Input name='userID' placeholder='userID' value = {this.state.userID} onChange={this.handleChange}/>
        </div>
        <div>
            <InputLabel htmlFor='password'>password</InputLabel>
            <Input name='password' placeholder='password' value = {this.state.password} onChange={this.handleChange}/>
        </div>
        <div>
            <InputLabel htmlFor='commission'>commission</InputLabel>
            <Input name='commission' placeholder='commission' value = {this.state.commission} onChange={this.handleChange}/>
        </div>
        <div>
            <InputLabel htmlFor='address'>address</InputLabel>
            <Input name='address' placeholder='address' value = {this.state.address} onChange={this.handleChange}/>
        </div>
        <div>
            <Button>Submit Info</Button>
        </div>

      </form>
    );
  }
}

export default NewAssocForm;