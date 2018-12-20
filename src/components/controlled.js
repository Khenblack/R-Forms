import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name: '',
        lastname: ''
    }

    handleNameChange = (event) => {
        const name = event.target.value;
        this.setState({
            name 
        });
    }

    handleLastNameChange = (event) => {
        const lastname = event.target.value;
        this.setState({
            lastname 
        });
    }

    onHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div className='container'>
                <form onSubmit={this.onHandler}>
                    <div className='form_element'>
                        <label>Enter name</label>
                        <input 
                            type='text'
                            onChange={this.handleNameChange}
                            value={this.state.name}
                        />
                    </div>
                    <div className='form_element'>
                        <label>Enter lastname</label>
                        <input 
                            type='text' 
                            onChange={this.handleLastNameChange}
                            value={this.state.lastname}
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Controlled;