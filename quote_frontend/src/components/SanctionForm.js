import React from "react";
import axios from "axios";

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
        const url = 'http://localhost/sanctionquote.php';
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
                    <label htmlFor='qID'>Quote ID to sanction</label>
                    <input name='qID' placeholder='quote ID #' value={this.state.qID} onChange={this.handleChange} />
                </div>
                <div>
                    <button>Sanction Quote</button>
                </div>
            </form>
        )
    }
}

export default SanctionForm;