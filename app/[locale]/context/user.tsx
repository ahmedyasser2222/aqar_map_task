"use client"
import React, { createContext, useContext, useState } from "react";


interface UserData {
    authenticated : boolean,
    setAuthenticatedFun ?: (bool : boolean)=> void
}
export const UserContext = createContext<UserData>({authenticated : false});

const UserProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {

    const [ authenticated, setAuthenticated ] = useState(false)
    function setAuthenticatedFun (bool : boolean)  {
        setAuthenticated(bool)
    }
    return (
        <UserContext.Provider value={{ authenticated , setAuthenticatedFun  }}>
          {children}
        </UserContext.Provider>
      );

}
export const useUserContext = () =>  useContext(UserContext);

export default UserProvider
