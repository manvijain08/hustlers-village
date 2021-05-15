import React from "react";
import Google from '../../Assets/Google.svg';
import Github from '../../Assets/Github.svg';
import Dribble from '../../Assets/Dribble.svg';
import { Link } from 'react-router-dom'
import "./Register.scss"

function Register() {
  return (
  <div className="card"> 
    <div className='Register'>
      <h2 className="head-l">Log in to your Account</h2> 
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

   <form className='form'> 
     <div className="name">
      <div className="First">
            <label className='f-text'>First Name</label>
          <input className='f-inp' type="type"/>
          </div>

          <div className="Last">
            <label className='l-text'>Last Name</label>
          <input className='l-inp' type="type"  />
          </div>

     </div>
       {/* <div className="Name">
          <label className='e-text'>Name</label>
         <input className='e-inp' type="Name"/>
        </div> */}


       <div className="email">
          <label className='e-text'>Email</label>
         <input className='e-inp' type="email" placeholder="xyz@gmail.com" />
        </div>

        <div className="Password">
          <label className='p-text'>Password</label>
          <div>
          <p className='fpassword'>Forget Password?</p>
            </div>
         <input className='p-inp' type="password" />
        </div>

        <div>
          <Link to='/Ddr'>
          <button className='btn-v'>Take Me To The Village</button>
          </Link>
        </div>

        <p className="signUp">
         Already have an account? 
        <Link to='/Login' className='s-link'>Log in</Link>
        </p>

        </form>
 </div>
  );
}
export default Register;