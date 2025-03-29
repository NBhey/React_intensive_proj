import {React, createContext, useState} from 'react'

export const LogStateContext = createContext()


export const LogState = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
    const login = () =>{
        setIsAuth(true)
    }
    const logout = () =>{
        setIsAuth(false)
    }
  return (
    <LogStateContext.Provider value={{isAuth, login, logout}}> {children} </LogStateContext.Provider>
  )
}
