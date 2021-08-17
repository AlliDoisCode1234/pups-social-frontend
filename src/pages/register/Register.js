import React, { useRef } from 'react'
import './Register.css'

const Register = () => {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()

    const handleClick = (e) => {
        e.preventDefault();

    }




    return (
        <div className="register">
            <div className="register__wrapper">
                <div className="register__wrapperLeft">
                    <img src="https://i.imgur.com/9LEj4L5.png" alt="" className="register__wrapperLeftLogo" />
                    <span className="register__wrapperLeftDesc">Connect with Puppies all around the world on the Pups app.</span>
                </div>
                <div className="register__wrapperRight">
                    <div className="register__wrapperRightBox">
                        <input placeholder="Username" ref={username} type="text" className="register__wrapperRightBoxRegisterInput" />
                        <input placeholder="Email" ref={email} type="email" className="register__wrapperRightBoxRegisterInput" />
                        <input placeholder="Password" ref={password} type="text" className="register__wrapperRightBoxRegisterInput" />
                        <input placeholder="Password Again" ref={passwordAgain} type="text" className="register__wrapperRightBoxRegisterInput" />
                        <button className="register__wrapperRightBoxButton">Sign Up</button>
                        
                        <button className="register__wrapperRightBoxRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Register
