import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDoc } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmedPassword: '',
    };
  }

  handleSubmit = async event => {
      event.preventDefault();
      const { displayName, email, password, confirmedPassword } = this.state;

      if (password !== confirmedPassword){
         alert("Password doesn't match");
         return;
      }

      try {
        const{user} = await auth.createUserWithEmailAndPassword(email,password);
        createUserProfileDoc(user,{displayName});

        this.setState = {
          displayName: '',
          email: '',
          password: '',
          confirmedPassword: '',
        };

      }catch (error){
        console.log(error.message);
      }

  }

  handleChange = event => {
    const{name,value } = event.target;
    this.setState({[name]: value})
  }

  render() {
    const { displayName, email, password, confirmedPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            required
            label="Your name"
          >
          </FormInput>

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
            label="Your email"

          >
          </FormInput>

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            required
            label="Your password"

          >
          </FormInput>

          <FormInput
            type="password"
            name="confirmedPassword"
            value={confirmedPassword}
            onChange={this.handleChange}
            required
            label="Re-enter your password"
          >
          </FormInput>
          <CustomButton type="submit">SIGN UP</CustomButton>

        </form>
      </div>
    );
  }
}

export default SignUp;
