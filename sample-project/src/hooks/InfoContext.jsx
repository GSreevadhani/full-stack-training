import { createContext } from "react";

export const InfoContext = createContext();

export const InfoProvider = ({children}) => {
    const User={name:'xabi', age:40, dep:'IT'}
    return(
        <InfoContext.Provider value={User}>
            {children}
        </InfoContext.Provider>
    )
}