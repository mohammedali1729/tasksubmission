import React from 'react';
import './Login.css';
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className='main'>
      <div className='submain'>
        <div className='text-name'>
        <h1>Login</h1>
        <h2>FOR SPRING SALE</h2><br></br>
        
        </div>
        <div className='content'>
        <q1>USER MAIL ID</q1><br></br>
        <input className='login-type' placeholder="mail ID" type="text" name="mailid" /><br></br>

        <q1>PASSWORD</q1><br></br>
        <input className='login-types' placeholder="password" type="password" name="name" /><br></br>
        
        <q2>CONFIRM PASSWORD</q2><br></br>
        <input className='login-typess' placeholder="Re-Type password" type="password" name="name" />
        </div><br></br>
        <div className='log'>
        <button className='login-btn'><Link to ="main">Login</Link></button>
        
        </div>
        </div>

      <div className='submain-2'>
      <div className='text-name'>
        {/* <h1>Login</h1>
        <h2>Free Course Registration</h2> */}
        
        </div>
        {/* <div className='content'>
        <input className='login-type' placeholder="username" type="text" name="name" />
        <input className='login-types' placeholder="password" type="password" name="name" />
        </div>
        <div className='log'>
        <button className='login-btn'><Link to ="main">Login</Link></button>
        </div> */}
        </div>

      </div>
    
  );
}

export default Login
