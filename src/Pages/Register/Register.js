import React from "react";

function Register() {
  return (
        <div className="Register">
      Register
        </div>
  );
}

export default Register;

// import React from 'react';
// import './Register.css';
// import Google from "../../Assets/Google.svg";
// import Github from "../../Assets/Github.svg";
// import Dribble from "../../Assets/Dribble.svg";

// import { Link } from 'react-router-dom'


// function Registerform() {
//     return (
//         <div className='Card2'>
//             <div className="Register">
//                 <h1 className="register-heading">Register to HustlersVillage</h1>
//                 <div className="Social2">
//                     <button className="google">
//                         <img className='googleicon' src={Google} alt="ab" />
//                         Google</button>
//                     <button className="Github">
//                         <img className='Githubicon' src={Github} alt="ab" />
//                         GitHub</button>
//                     <button className="Dribble">
//                         <img className='dribbbleicon' src={Dribble} alt="ab" />
//                         Dribbble</button>
//                 </div>
//                 <div className="email">
//                     <p className="description">or log in with email</p>
//                 </div>
//                 <form className='form'>
//                     <div className="sectionform">
//                         <div className="name">
//                             <label className='title1' >First name</label>
//                             <input className='content1' type='text'></input>

//                         </div>
//                         <div className="lastname">
//                             <label className='title1' >Last name</label>
//                             <input className='content1' type='text'></input>
//                         </div>
//                     </div>
//                     <div className="email3">
//                         <label className='title1'>Email</label>
//                         <input className='content1' type="email" />
//                     </div>
//                     <div className="pass">
//                         <label className='title1'>Password</label>
//                         <input className='content1' type="password" />
//                     </div>

//                     <div className="roles">
//                          <Link to='/Roles'>
//                         </Link>
//                          <p className="signup">
//                             Already have an account?<span> <Link to='/LogIn' className='logIn-link'>Log In</Link></span>
//                         </p>     <button className='rolesbutton'>Take Me To The Village</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Registerform