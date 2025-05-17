import { createContext, useState,useContext } from "react";

const LoginContext=createContext()

export const LoginContextProvider=({children})=>{

    const[username,setUsername]=useState('')
    const [isLogged,setisLogged]=useState(false)

    return(
        <LoginContext.Provider value={{ isLogged, setisLogged,username,setUsername }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLogged = () => {
    return useContext(LoginContext);
};