import React from "react";
import axios from "axios";
import { Input, InputLabel, TextField, Button} from '@material-ui/core';


class SanctionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {qID: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
      }

    handleSubmit(event) {
        const {qID} = this.state;
        const url = 'http://localhost/sanction.php';
        const form = new FormData();
        form.append('qid', qID);
        axios.post(url,form).then(function(response){
            console.log(response);
        })
        event.preventDefault();
        //handle error and success alert messages below
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <InputLabel htmlFor='qID'>Quote ID to sanction</InputLabel>
                    <Input name='qID' placeholder='quote ID #' value={this.state.qID} onChange={this.handleChange} />
                </div>
                <div>
                    <Button>Sanction Quote</Button>
                </div>
            </form>
        )
    }
}

export default SanctionForm;