import React from "react";
import axios from "axios";
import { Input, InputLabel, TextField, Button} from '@material-ui/core';

var ID = sessionStorage.getItem("ID");

class NewQuoteForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {custID: 0,
                      assocID: 0,
                      quoteText: '',
                      secretText: '',
                      email: '',
                      finalized: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event){
        const url = 'http://localhost/addnewquote.php'
        const {cID} = this.state;
        var {qText} = this.state;
        var {sText} = this.state;
        var {mail} = this.state;
        var {finalized} = this.state;

        const form = new FormData();
        form.append('cid', cID);
        form.append('aid', ID);
        form.append('ID', ID);
        form.append('qtext', qText);
        form.append('stext', sText);
        form.append('email', mail);
        form.append('finalized', finalized);

        axios.post(url,form).then(function (response){
            console.log(response);

        })

        event.preventDefault();

        alert("Data was entered into new quote database successfully");
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>

                    <InputLabel htmlFor='cID'>Customer ID</InputLabel>
                    <Input name='cID' placeholder="Customer's ID #" value={this.state.cID} onChange={this.handleChange}/>
                </div>

                <div>
                    <InputLabel htmlFor='mail'>Customer Email</InputLabel>
                    <Input name='mail' placeholder="Associate Email Address" value={this.state.mail} onChange={this.handleChange}/>
                </div>

                <div>
                    <TextField name='qText' placeholder="Enter Quote Here. Please Preceed The Price of the Line Item with a $" value={this.state.qText} onChange={this.handleChange}/>
                </div>

                <div>
                    <TextField name='sText' placeholder="Enter Secret Text" value={this.state.sText} onChange={this.handleChange}/>
                </div>

                <div>
                    <Button>Enter</Button>
                </div>

            </form>
        );
    }
}

export default NewQuoteForm;