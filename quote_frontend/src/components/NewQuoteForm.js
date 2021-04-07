import React from "react";
import axios from "axios";

class NewQuoteForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {custID: 0,
                      assocID: 0,
                      quoteText: '',
                      secretText: '',
                      email: '' };

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
        //const {aID} = find way to get associate ID from sign in
        var {qText} = this.state;
        var {sText} = this.state;
        var {mail} = this.state;
        console.log("Customer ID: "+ cID);
        //console.log("Associate ID: " + aID);
        console.log(qText);
        console.log("Secret Text: " + sText);
        console.log("Customer Email: "+ mail);

        const form = new FormData();
        form.append('cid', cID);
        form.append('qtext', qText);
        form.append('stext', sText);
        form.append('email', mail);

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
                    <label htmlFor='cID'>Customer ID</label>
                    <input name='cID' placeholder="Customer's ID #" value={this.state.cID} onChange={this.handleChange}/>
                </div>

                <div>
                    <label htmlFor='mail'>Customer email</label>
                    <input name='mail' placeholder="Associates's email address" value={this.state.mail} onChange={this.handleChange}/>
                </div>

                <div>
                    <textarea name='qText' placeholder="Enter quote here. Please preceed the price of the line item with a $" value={this.state.qText} onChange={this.handleChange}/>
                </div>

                <div>
                    <textarea name='sText' placeholder="Enter secret text here." value={this.state.sText} onChange={this.handleChange}/>
                </div>

                <div>
                    <button>Enter</button>
                </div>

            </form>
        );
    }
}

export default NewQuoteForm;