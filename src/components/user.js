import React, { Component } from 'react';
import FormFields from '../widgets/Forms/formFields';

class User extends Component {

    state = {
        formData: {
            name: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Name',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                }
            },
            lastname: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Lastname',
                config: {
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter your lastname'
                }
            }
        }
    }

    formSubmitHandler = (event) => {
        event.preventDefault();

        let dataToSubmit = {};

        for(let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value
        }
        console.log(dataToSubmit);
    }

    updateForm = newState => {
        this.setState({
            formData: newState
        });
    }

    render(){
        return(
            <div className='container'>
                <form onSubmit={this.formSubmitHandler}>
                    <FormFields 
                        formData={this.state.formData}
                        change={(newState) => this.updateForm(newState)}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default User;