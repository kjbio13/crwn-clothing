import React, { Component } from 'react';

//styles
import './sign-up.styles.scss'

//components
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

//utilities
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class signUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }


    handleSubmit = async event => {
        //aways prevent default
        event.preventDefault();
        // console.log("Submit")
        // destructure the state after the submit button is clicked
        const { displayName, email, password, confirmPassword } = this.state;

        //check if passwords match first
        if (password !== confirmPassword) {
            alert('Passwords Don\'t Match')
            return;
        }


        try {
            //Firebase auth method .createUserWithEmailAndPassword(emial, password) 
            //This also checks if the email is already in user -- get the error message from catch
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            //call the createUserProfileDocument we created in firebase util -- user from previous line
            await createUserProfileDocument(user, { displayName });
            // console.log("made");

            //reset the state
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.log(error.message);
            // alert("Oopsie! " + error.message);

        }




    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };




    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default signUp;