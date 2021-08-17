import React, { useContext, useRef } from 'react'
import './Login.css'
import { loginCall } from "../../apiCalls"
import { AuthContext } from '../../context/AuthContext';
import {CircularProgress} from "@material-ui/core"

const Login = () => {
    const email = useRef();
    const password = useRef();
    const {user, isFetching, dispatch} = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch)
    }

    console.log(user)
    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__wrapperLeft">
                    <img src="https://i.imgur.com/9LEj4L5.png" alt="" className="login__wrapperLeftLogo" />
                    <span className="login__wrapperLeftDesc">Connect with Puppies all around the world on the Pups app.</span>
                </div>
                <div className="login__wrapperRight">
                    <form className="login__wrapperRightBox" onSubmit={handleClick}>
                        <input 
                            placeholder="Email" 
                            type="email" 
                            required 
                            className="login__wrapperRightBoxLoginInput" 
                            ref={email} 
                        />
                        <input 
                            placeholder="Password" 
                            type="password" 
                            required 
                            minLength = '6'
                            className="login__wrapperRightBoxLoginInput" 
                            ref={password} 
                        />
                        <button className="login__wrapperRightBoxButton" type="submit" disabled={isFetching} >
                            {isFetching ? (
                                <CircularProgress color="white" size="35px" /> 
                            ) : (
                                 "Log In"
                            )}
                        </button>
                        <span className="login__wrapperRightBoxLoginForgot">Forgot Password?</span>
                        <button className="login__wrapperRightBoxRegisterButton">
                        {isFetching ? (
                            <CircularProgress color="white" size="35px" /> 
                        ) : (
                             "Create a New Account"
                        )}
                        </button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Login
