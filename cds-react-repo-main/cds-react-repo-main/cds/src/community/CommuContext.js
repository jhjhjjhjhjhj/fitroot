import React, { createContext, useContext, useState } from "react";

const LoginIdContext = createContext();

export const CommuContext = ({ children }) => {
    const [loggedId, setLoggedId] = useState('manager');
    const [loggedIn, setLoggedIn] = useState(true);

    const contextValue = { loggedId, setLoggedId, loggedIn, setLoggedIn }

    return (
        <LoginIdContext.Provider value={contextValue}>
            {children}
        </LoginIdContext.Provider>
    );
};

export const useLogin = () => useContext(LoginIdContext);