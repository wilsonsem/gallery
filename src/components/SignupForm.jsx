import React from 'react'
import './loginform.css'


const SignupForm = () => {
  return (
    <div className='cover'>
      <h1>SIGN UP</h1>
      <input type="text" placeholder='firstname' />
      <input type="text" placeholder='lastnamename' />
      <input type="text" placeholder='username' />
      <input type="password" placeholder='password' />
      <input type="password" placeholder='password' />
      <button type='submit' className='login-btn'>SignUp</button>
      <p className='text'>Or signup using</p>
      <div className='alt-login'>
        <div className='facebook'>F</div>
        <div className='google'>G</div>
        <div className='linkedIn'>L</div>
      </div>
      <div>
        <p>Have an account? <a href='/signup.'>Log In</a></p>
      </div>
    </div>
  )
}

export default SignupForm
