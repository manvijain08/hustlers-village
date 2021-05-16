import React from "react";
import Google from '../../Assets/Google.svg';
import Github from '../../Assets/Github.svg';
import Dribble from '../../Assets/Dribble.svg';
import { Link } from 'react-router-dom'
import "./Login.scss"
import { useState } from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      errors: {
        email: '',
        password: '',
      }
    };
  }
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'email': 
        errors.email = 
          errors.email(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'Password': 
        errors.Password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {   

    event.preventDefault()
    console.log(this.state);
    const { history } = this.props
    if (history) history.push('/Ddr')
  }

  render() {
    const {errors} = this.state;
  return (
  <div className="l-card"> 
    <div className='Register'>
      <h2 >Log in to your account</h2> 
       <div className="social">
          <button className="Google">
            <img  src={Google} alt="xyz" />
            Google
          </button>
          <button className="Github">
            <img src={Github} alt="xyz" />
            Github
          </button>
          <button className="Dribble">
            <img  src={Dribble} alt="xyz" />
            Dribble
          </button>
        </div>
   <p className="line">or log in with email</p>
    </div> 

   <form className='form' onSubmit={this.handleSubmit} noValidate> 

       <div className="email">
          <label className='e-text'>Email</label>
         <input className='e-inp' type="email" 
         value={this.state.email} 
         onChange={this.handleChange} />
         {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
        </div>

        <div className="Password">
          <label className='p-text'>Password</label>
          <div>
          <p className='fpassword'>Forget Password?</p>
            </div>
         <input className='p-inp' type="password" 
         value={this.state.Password}
          onChange={this.handleChange} />
           {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
        </div>
        <div>
          <button className='btn-v'>Take Me To The Village</button>
        </div>

        <p className="signUp">
         Already have an account? 
        <Link to='/Register' className='s-link'>Sign up</Link>
        </p>

        </form>
 </div>
  );
}
}
export default Login;