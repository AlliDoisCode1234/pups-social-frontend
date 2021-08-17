import React, { useRef } from 'react'
import './Register.css'
import { useHistory } from "react-router"
import axios from "axios"

const Register = () => {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const history = useHistory()

    const handleClick = async (e) => {
        e.preventDefault();

        if(passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("passwords don't match")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post("/auth/register", user);
                history.push("/login")
            } catch(err){
                console.log(err)
            }
        }
    }




    return (
        <div className="register">
            <div className="register__wrapper">
                <div className="register__wrapperLeft">
                    <img src="https://i.imgur.com/9LEj4L5.png" alt="" className="register__wrapperLeftLogo" />
                    <span className="register__wrapperLeftDesc">Connect with Puppies all around the world on the Pups app.</span>
                </div>
                <div className="register__wrapperRight">
                    <form className="register__wrapperRightBox" onSubmit={handleClick}>
                        <input 
                            placeholder="Username" 
                            ref={username} 
                            required
                            type="text" 
                            className="register__wrapperRightBoxRegisterInput"     
                        />
                        <input 
                            placeholder="Email" 
                            ref={email} type="email" 
                            required
                            className="register__wrapperRightBoxRegisterInput" 
                        />
                        <input 
                            placeholder="Password" 
                            ref={password} 
                            type="password"
                            required
                            minLength="6" 
                            className="register__wrapperRightBoxRegisterInput" 
                        />
                        <input 
                            placeholder="Password Again" 
                            ref={passwordAgain} 
                            type="password" 
                            className="register__wrapperRightBoxRegisterInput" 
                        />
                        <button className="register__wrapperRightBoxButton" type="submit" >Sign Up</button>
                        
                        <button className="register__wrapperRightBoxRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Register
