import { createContext, useEffect, useState } from "react";
import axios from "axios";
import setConfig from "../adapters/axios"

const config = setConfig();

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/auth', config).then(response => {
            setUser(response)
                console.log(setUser())
            }

        )


        return () => {
            setUser();
        };
    }, []);


    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
