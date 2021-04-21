import React from "react";
import axios from "axios";
import { Input, InputLabel, TextField, Button} from '@material-ui/core';


class EditAssocForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {ID : 0,
                        user: '',
                    };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
      }

      handleSubmit(event) {
        const {id} = this.state;
        const url = 'http://localhost/getAssociate.php';
        const form = new FormData();
        form.append('id', id);
        axios.post(url,form).then(function(response){
            console.log(response.data);
            var x = (response.data).split(" ");
            sessionStorage.setItem("user", x[0]);
            sessionStorage.setItem("pass", x[1]);
            sessionStorage.setItem("comm", x[2]);
            sessionStorage.setItem("addr", x[3]);
            window.location.reload()

        })
        event.preventDefault();
        
    }
    handleEdit(event) {
        const {userID, password, commission, address} = this.state;
    const url = 'http://localhost/editassociate.php';
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
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <InputLabel htmlFor='ID'>Associate ID to edit</InputLabel>
                    <Input name='id' placeholder='Associates ID #' value={this.state.id} onChange={this.handleChange} />
                </div>
                <div>
                    <Button>Get Associate Info</Button>
                </div>
            </form>
            <form onSubmit={this.handleEdit}>
            <div>
                <InputLabel htmlFor='userID'>UserID</InputLabel>
                <Input name='userID' placeholder={sessionStorage.getItem("user")} value = {this.state.userID} onChange={this.handleChange}/>
            </div>
            <div>
                <InputLabel htmlFor='password'>Password</InputLabel>
                <Input name='password' placeholder={sessionStorage.getItem("pass")} value = {this.state.password} onChange={this.handleChange}/>
            </div>
            <div>
                <InputLabel htmlFor='commission'>Commission</InputLabel>
                <Input name='commission' placeholder={sessionStorage.getItem("comm")} value = {this.state.commission} onChange={this.handleChange}/>
            </div>
            <div>
                <InputLabel htmlFor='address'>Address</InputLabel>
                <Input name='address' placeholder={sessionStorage.getItem("addr")} value = {this.state.address} onChange={this.handleChange}/>
            </div>
            <div>
                <Button>Edit Info</Button>
            </div>
    
          </form>
          </div>
        );
    }
}
export default EditAssocForm;