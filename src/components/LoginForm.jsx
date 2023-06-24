import React from 'react'
import './loginform.css'
import { } from 'react-social-icons'


const LoginForm = () => {
  return (
    <div className='cover'>
      <h1>LOGIN</h1>
      <input type="text" placeholder='username' />
      <input type="password" placeholder='password' />
      <button type='submit' className='login-btn'>Login</button>
      <p className='text'>Or login using</p>
      <div className='alt-login'>
        <div className='facebook'>F</div>
        <div className='google'>G</div>
        <div className='linkedIn'>L</div>
      </div>
      <div>
        <p>Don't have an account? <a href='/signupform.js'>SignUp</a></p>
      </div>

    </div>
  )
}

export default LoginForm
