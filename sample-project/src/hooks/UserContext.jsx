import { createContext } from "react";
//create context
export const UserContext=createContext();

//context Provider
export const UserProvider=({children})=>{
    const name='shandeep'
    return(
        <UserContext.Provider value={name}>
            {children}
        </UserContext.Provider>
    )
}