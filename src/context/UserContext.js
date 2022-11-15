import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react';


const UserContext= createContext();

const UserProvider = ({children}) => {
const [myUser,setMyUser]= useState(null);
const {isAuthenticated, isLoading,user, loginWithRedirect,logout}= useAuth0(); 

console.log(myUser);

useEffect(()=>{
    setMyUser(user);
},[isAuthenticated])

  return (
    <UserContext.Provider value={{loginWithRedirect,logout,isLoading,isAuthenticated,myUser}}>
        {children}
    </UserContext.Provider>
  )
}

const useUserContext=()=> {
    return useContext(UserContext);
}

export {UserProvider, useUserContext}