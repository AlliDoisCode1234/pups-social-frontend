import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__wrapperLeft">
                    <img src="https://i.imgur.com/9LEj4L5.png" alt="" className="login__wrapperLeftLogo" />
                    <span className="login__wrapperLeftDesc">Connect with Puppies all around the world on the Pups app.</span>
                </div>
                <div className="login__wrapperRight">
                    <div className="login__wrapperRightBox">
                        <input placeholder="Email" type="email" className="login__wrapperRightBoxLoginInput" />
                        <input placeholder="Password" type="text" className="login__wrapperRightBoxLoginInput" />
                        <button className="login__wrapperRightBoxButton">Log In</button>
                        <span className="login__wrapperRightBoxLoginForgot">Forgot Password?</span>
                        <button className="login__wrapperRightBoxRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login
