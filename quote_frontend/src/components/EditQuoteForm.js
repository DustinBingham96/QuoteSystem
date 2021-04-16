import React from "react";
import axios from "axios";

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
    alert('Associate Info was submitted. CustID: ' + cid + ' quote: ' + quote + ' : ' + secret + ' address: ' + finalized);
    }


    render() {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='ID'>Quote Id to edit</label>
                    <input name='qID' placeholder='Quote ID #' value={this.state.qID} onChange={this.handleChange} />
                </div>
                <div>
                    <button>Get Quote Info</button>
                </div>
            </form>
            <form onSubmit={this.handleEdit}>
            <div>
                <label htmlFor='qid'>QuoteID Being Edited</label>
                <input name='qID' value = {this.state.qID} onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor='cid'>CustID</label>
                <input name='cid' placeholder={sessionStorage.getItem("cid")} value = {this.state.cid} onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor='quote'>Quote</label>
                <textarea name='quote' placeholder={sessionStorage.getItem("quote")} value = {this.state.quote} onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor='secret'>secret</label>
                <textarea name='secret' placeholder={sessionStorage.getItem("secret")} value = {this.state.secret} onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor='finalized'>finalized</label>
                <input name='finalized' placeholder={sessionStorage.getItem("finalized")} value = {this.state.finalized} onChange={this.handleChange}/>
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