import React from "react";

class NewCustForm extends React.Component {
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
    event.preventDefault();
    alert('Associate Info was submitted. UserID: ' + userID + ' password: ' + password + ' commission: ' + commission + ' address: ' + address);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label htmlFor='userID'>userID</label>
            <input name='userID' placeholder='userID' value = {this.state.userID} onChange={this.handleChange}/>
        </div>
        <div>
            <label htmlFor='password'>password</label>
            <input name='password' placeholder='password' value = {this.state.password} onChange={this.handleChange}/>
        </div>
        <div>
            <label htmlFor='commission'>commission</label>
            <input name='commission' placeholder='commission' value = {this.state.commission} onChange={this.handleChange}/>
        </div>
        <div>
            <label htmlFor='address'>address</label>
            <input name='address' placeholder='address' value = {this.state.address} onChange={this.handleChange}/>
        </div>
        <div>
            <button>Submit Info</button>
        </div>

      </form>
    );
  }
}

export default NewCustForm;