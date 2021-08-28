import React, { createContext, useReducer, useEffect } from "react"
import AuthReducer from "./AuthReducer";


// const INITIAL_STATE = {
//     user: {
//        _id: "6107ba17e559768e547f3b2c",
//        profilePicture: "/person/7.jpeg",
//        coverPicture: "/post/3.jpeg",
//        followers: ["6107ba0de559768e547f3b2a"],
//        followings: ["6107ba0de559768e547f3b2a"],
//        isAdmin: false,
//        username: "JohnSmith",
//        email: "second@gmail.com",
//        desc: "Hey all you cool cats and kittens",
//        city: "Boston, MA",
//        from: "United States",
//        relationship: "2"
//     },
//     isFetching: false,
//     error: false
// }

const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {

    const [state, dispatch]  = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    return (
        <AuthContext.Provider 
            value={{
                user: state.user, 
                isFetching: state.isFetching, 
                error: state.error,
                dispatch 
            }}
        >{children}</AuthContext.Provider>
    )
}