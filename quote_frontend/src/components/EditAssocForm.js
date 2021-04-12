import React from "react";
import axios from "axios";

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
            var x = response.data.toString();
            x.split(" ");
            sessionStorage.setItem("user", x[0]);
            console.log(x[0]);
            sessionStorage.setItem("pass", x[1]);
            sessionStorage.setItem("comm", x[2]);
            sessionStorage.setItem("addr", x[3]);

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
                    <label htmlFor='ID'>Associate ID to edit</label>
                    <input name='id' placeholder='Associates ID #' value={this.state.id} onChange={this.handleChange} />
                </div>
                <div>
                    <button>Get Associate Info</button>
                </div>
            </form>
            <form onSubmit={this.handleEdit}>
            <div>
                <label htmlFor='userID'>userID</label>
                <input name='userID' placeholder={sessionStorage.getItem("user")} value = {this.state.userID} onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor='password'>password</label>
                <input name='password' placeholder={sessionStorage.getItem("pass")} value = {this.state.password} onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor='commission'>commission</label>
                <input name='commission' placeholder={sessionStorage.getItem("comm")} value = {this.state.commission} onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor='address'>address</label>
                <input name='address' placeholder={sessionStorage.getItem("addr")} value = {this.state.address} onChange={this.handleChange}/>
            </div>
            <div>
                <button>Edit Info</button>
            </div>
    
          </form>
          </div>
        );
    }
}
export default EditAssocForm;