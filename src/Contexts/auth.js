import { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({children}){
    
    const [token, setToken] = useState(null);
    const URL_API = "https://fit-market.onrender.com"
    //const URL_API = "http://localhost:5000"
    
    return(
        <AuthContext.Provider value={ { token, setToken, URL_API } } >
            {children}
        </AuthContext.Provider>
    );

}