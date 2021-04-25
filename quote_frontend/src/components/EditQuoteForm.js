import React from "react";
import axios from "axios";
import { Input, InputLabel, TextField, Button} from '@material-ui/core';


var ID = sessionStorage.getItem("ID");

class EditQuoteForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {qID : ""};
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
        const {qID} = this.state;
        const url = 'http://localhost/getQuote.php';
        const form = new FormData();
        form.append('qid', qID);
        axios.post(url,form).then(function(response){
            console.log(response.data);
            var x = (response.data).split("/");
            sessionStorage.setItem("cid", x[0]);
            sessionStorage.setItem("quote", x[1]);
            sessionStorage.setItem("secret", x[2]);
            sessionStorage.setItem("finalized", x[3]);
            window.location.reload();

        })
        event.preventDefault();
        
        
    }

    handleEdit(event) {   
    const {qID, cid, quote, secret, finalized} = this.state;
    const url = 'http://localhost/editquote.php';
    const form = new FormData();
    form.append('qid', qID);
    form.append('cid', cid);
    form.append('quote', quote);
    form.append('secret', secret);
    form.append('finalized', finalized);
    axios.post(url, form).then(function(response){
        console.log(response)
    })
    event.preventDefault();
    alert('Quote Info was submitted. CustID: ' + cid + ' quote: ' + quote + ' : ' + secret + ' address: ' + finalized);
    }


    render() {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <InputLabel htmlFor='ID'>Quote ID to Edit</InputLabel>
                    <Input name='qID' placeholder='Quote ID #' value={this.state.qID} onChange={this.handleChange} />
                </div>
                <div>
                    <button>Get Quote Info</button>
                </div>
                <br />
            </form>
            <form onSubmit={this.handleEdit}>
            <div>
                <InputLabel htmlFor='qid'>QuoteID Being Edited</InputLabel>
                <Input name='qID' value = {this.state.qID} onChange={this.handleChange}/>
            </div>
            <div>
                <InputLabel htmlFor='cid'>CustID</InputLabel>
                <Input name='cid' placeholder={sessionStorage.getItem("cid")} value = {this.state.cid} onChange={this.handleChange}/>
            </div>
            <div>
                <InputLabel htmlFor='quote'>Quote</InputLabel>
                <TextField name='quote' placeholder={sessionStorage.getItem("quote")} value = {this.state.quote} onChange={this.handleChange}/>
            </div>
            <div>
                <InputLabel htmlFor='secret'>Secret</InputLabel>
                <TextField name='secret' placeholder={sessionStorage.getItem("secret")} value = {this.state.secret} onChange={this.handleChange}/>
            </div>
            <div>
                <InputLabel htmlFor='finalized'>Finalized</InputLabel>
                <Input name='finalized' placeholder={sessionStorage.getItem("finalized")} value = {this.state.finalized} onChange={this.handleChange}/>
            </div>
            <div>
                <button>Edit Info</button>
            </div>
    
          </form>
          </div>
        );
    }
}



export default EditQuoteForm;