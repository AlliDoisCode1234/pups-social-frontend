import React, { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        _id: "6107ba17e559768e547f3b2c",
        followers: [],
        followings: [],
        isAdmin: false,
        username: "JohnSmith",
        email: "second@gmail.com",
        desc: "Hey all you cool cats and kittens",
        city: "Boston, MA",
        from: "United States",
        relationship: "2",
    },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {

    const [state, dispatch]  = useReducer(AuthReducer, INITIAL_STATE)

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