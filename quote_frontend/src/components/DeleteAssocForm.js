import React from "react";
import axios from "axios";
import { Input, InputLabel, TextField, Button} from '@material-ui/core';


class DeleteAssocForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {ID: 0};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
      }
    
    handleSubmit(event) {
        const {id} = this.state;
        const url = 'http://localhost/deleteassoc.php';
        const form = new FormData();
        form.append('id', id);
        axios.post(url,form).then(function(response){
            console.log(response);
        })
        event.preventDefault();
        alert('Associate with ID number: ' + id + ' was deleted');
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <InputLabel htmlFor='ID'>Associate ID</InputLabel>
                    <Input name='id' placeholder='Associates ID #' value={this.state.id} onChange={this.handleChange} />
                </div>
                <div>
                    <button>Delete Associate Info</button>
                </div>
            </form>
        );
    }
}

export default DeleteAssocForm;