import React from "react";
import axios from "axios";
import { Input, InputLabel, TextField, Button} from '@material-ui/core';


class FinalizeForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {qID: "",
                    finalPrice: 0}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
      }

    handleSubmit(event) {
        const {qID, finalPrice} = this.state;
        const url = 'http://localhost/finalize.php';
        const form = new FormData();
        form.append('qid', qID);
        form.append('finalPrice', finalPrice)
        axios.post(url,form).then(function(response){
            console.log(response);
        })
        event.preventDefault();
        //handle error and success alert messages below
        alert("Quote: " + qID + " has been finalized with the final price of: " + finalPrice);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <InputLabel htmlFor='qID'>Quote ID to Finalize</InputLabel>
                    <Input name='qID' placeholder='quote ID #' value={this.state.qID} onChange={this.handleChange} />
                </div>
                <div>
                    <InputLabel htmlFor='finalPrice'>Final Price of Quote</InputLabel>
                    <Input name='finalPrice' placeholder='Price after any further discounts' value={this.state.finalPrice} onChange={this.handleChange} />
                </div>
                <div>
                    <button>Finalize Quote</button>
                </div>
            </form>
        )
    }
}

export default FinalizeForm;