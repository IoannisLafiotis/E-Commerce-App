import React from 'react';

import './signin.scss';
import FormInput from '../form-input/form-input.component'
import CustomButtom from '../custom-button/custom.button.component'
import { auth , signInWithGoogle} from '../../firebase/firebase.utils'


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email , password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({ email: '' ,password: '' })
        }catch (error){
            console.log(error); 
        }



        this.setState({email:'',password: ''})
    }
 

    handleChange = event => {
        const { value , name } = event.target;

        this.setState({[name]: value })
    }

    render(){

        return(
            <div className='sign-in'>
                <h2> I already have account </h2>
                <span> Sign in with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email"  value={this.state.email} handleChange={this.handleChange} required label="email"/>
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} required label="password" />

                    <div className='buttons'>
                    <CustomButtom type="submit"> Sign In</CustomButtom>
                    <CustomButtom onClick={signInWithGoogle} isGoogleSignIn > Sign In with Google</CustomButtom>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignIn;