import React from 'react'
import './Mainpage.css';
import {Link} from "react-router-dom";


function Mainpage() {
  return (
    <div className='main'>
      <div className='details'>
      <h1>ADDDITIONAL DETAILS</h1>
      <div className='content'>
       <dr className= "gender"> <q1>GENDER</q1><br></br><br></br></dr>
        <q2>MALE</q2>
        <button><input type="radio" className='gender'></input></button>
        <q3>FEMALE</q3>
        <button><input type="radio" className='female'></input></button>
        <q3>OTHERS</q3>
        <button><input type="radio" className='others'></input></button><br></br><br></br>
        <q4>CONTACT</q4>
        <input type='number' placeholder='Enter 10 digit Number..'></input><br></br><br></br>
        <q4>DOB</q4><br></br>
        <div className='dob'><input className='number' placeholder='DD\\'></input> <r1></r1><input type="number" placeholder='MM\\'></input><e></e><input type="number" placeholder='YYYY'></input></div>
        <div className="lo"><button className='login-btn'><Link to ="/">SIGN IN</Link></button></div>
        <div className="lol"><button className='login-btn'><Link to ="/">LOGOUT</Link></button></div>

      </div>
      </div>
    </div>
  )
}

export default Mainpage
