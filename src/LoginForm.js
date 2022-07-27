import React from 'react'
import img from './img1.jpg'
import SignInForm from './Form'
import "./LoginForm.css"

 function LoginForm() {
  return (
    <div className="flex">
        <div className="left">
            <div className="content">
            <h1>Welcome back</h1>
            <h5>Hi 👋</h5>
            </div>
            <div className="form">
           <SignInForm/>
            </div>
        </div>
        <div className="right">
            <img src={img} alt="LogIn Form"/>
        </div>
    </div>
  )
}

export default LoginForm;
