import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {
    default as setConfig,
    apiUrl,
} from "../adapters/axios"

const config = setConfig();

export const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();


    axios.interceptors.response.use(response => {
        return response;
    }, error => {
        if (error.response.status === 401) {
            window.location.href = apiUrl + '/login/azure';
        }
        return error;
    });

    useEffect(() => {
            axios.get(apiUrl + '/api/auth', config).then(response => {
                setUser(response.data)
            })
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
