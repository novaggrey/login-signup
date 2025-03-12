import React, {useState} from 'react';
import './LoginSignup.css';
// import user_icon from '../Assets/person.png';
// import email_icon from '../Assets/email.png';
// import password_icon from '../Assets/password.png';

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");

  return (
    <div className='Container'>
      <div className='Header'>
        <div className='Text'>{action}</div>
        <div className='Underline'></div>
      </div>
      <div className='Inputs'>
        {action==="Login"?<div></div>:<div className='Input'>
            {/* <img src={user_icon} alt='user' /> */}
            <input type='text' placeholder='Username' />
            </div>
        }
        
        <div className='Input'>
          {/* <img src={email_icon} alt='user' /> */}
          <input type='email' placeholder='Email' />
        </div>
        <div className='Input'>
          {/* <img src={password_icon} alt='user' /> */}
          <input type='password' placeholder='Password' />
        </div>
        {action==="Sign Up"?<div></div>:<div className='Forgot-password'>Forgot Password? <span>Reset</span></div>
        }
        <div className='Submit-container'>
          <div className={action ==="Login"?"Submit gray":"Submit"} onClick = {()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action ==="Sign Up"?"Submit gray":"Submit"} onClick = {()=> {setAction("Login")}}>Login</div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;