import React,{useState} from 'react';
import UserContext from './UserContext';
const UserContextProvider = ({children}) => {
    const [flag,setflag]=useState(0);
  return (
    <UserContext.Provider value={{flag,setflag}}>
        {children}
    </UserContext.Provider> 
  )
}

export default UserContextProvider